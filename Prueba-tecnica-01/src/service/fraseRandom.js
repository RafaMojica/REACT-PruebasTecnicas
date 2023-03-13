const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const fraseRandom = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    return data.fact
};
