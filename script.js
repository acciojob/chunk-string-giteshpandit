function stringChop(str, size) {
    // If the string is null or size is not a positive integer, return an empty array
    if (!str || size <= 0) return [];

    const result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.substring(i, i + size));
    }

    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10); // Ensure the size is parsed as an integer
alert(stringChop(str, size));
