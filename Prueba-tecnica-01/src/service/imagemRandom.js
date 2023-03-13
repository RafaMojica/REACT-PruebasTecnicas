const CAT_ENDPOINT_IMG = "https://cataas.com/cat/says/";

export const imagenRandom = async (frase) => {
  if (!frase) return;
  const TresPrimerasFrase = frase.split(" ").slice(0, 3).join(" ");

  const res = await fetch(`${CAT_ENDPOINT_IMG}${TresPrimerasFrase}`)
  return res.url
};
