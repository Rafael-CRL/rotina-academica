import AsyncStorage from "@react-native-async-storage/async-storage";

// Leitura e escrita de JSON no armazenamento do aparelho. Falhas viram `null`/aviso
// para o app continuar funcionando com os dados em memória.
export async function readJson<T>(key: string): Promise<T | null> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch (error) {
    console.warn(`Não foi possível ler "${key}"`, error);
    return null;
  }
}

export async function writeJson(key: string, value: unknown) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Não foi possível salvar "${key}"`, error);
  }
}
