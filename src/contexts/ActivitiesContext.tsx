import { loadActivities, saveActivities } from "@/data/activities";
import { Activity, ActivityInput } from "@/types/activity";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ActivitiesContextValue = {
  activities: Activity[];
  isLoading: boolean;
  getActivity: (id: string) => Activity | undefined;
  addActivity: (input: ActivityInput) => void;
  updateActivity: (id: string, input: ActivityInput) => void;
  toggleDone: (id: string) => void;
  removeActivity: (id: string) => void;
};

const ActivitiesContext = createContext<ActivitiesContextValue | null>(null);

const createId = () =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;

// Guarda as atividades em memória para todas as telas e as salva no aparelho a cada mudança.
export function ActivitiesProvider({ children }: { children: ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    loadActivities().then((stored) => {
      if (!active) return;
      setActivities(stored);
      setIsLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!isLoading) saveActivities(activities);
  }, [activities, isLoading]);

  const getActivity = useCallback(
    (id: string) => activities.find((activity) => activity.id === id),
    [activities],
  );

  const addActivity = useCallback((input: ActivityInput) => {
    setActivities((current) => [...current, { ...input, id: createId(), done: false }]);
  }, []);

  const updateActivity = useCallback((id: string, input: ActivityInput) => {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === id ? { ...activity, ...input } : activity,
      ),
    );
  }, []);

  const toggleDone = useCallback((id: string) => {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === id ? { ...activity, done: !activity.done } : activity,
      ),
    );
  }, []);

  const removeActivity = useCallback((id: string) => {
    setActivities((current) => current.filter((activity) => activity.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      activities,
      isLoading,
      getActivity,
      addActivity,
      updateActivity,
      toggleDone,
      removeActivity,
    }),
    [
      activities,
      isLoading,
      getActivity,
      addActivity,
      updateActivity,
      toggleDone,
      removeActivity,
    ],
  );

  return (
    <ActivitiesContext.Provider value={value}>{children}</ActivitiesContext.Provider>
  );
}

export function useActivities() {
  const context = useContext(ActivitiesContext);
  if (!context)
    throw new Error("useActivities deve ser usado dentro de ActivitiesProvider");
  return context;
}
