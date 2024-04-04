export function generateRandomBuildNumber() {
    return `${Math.floor(Math.random() * 1000000)}-${Math.floor(
        Math.random() * 1000000,
    )}`;
}
