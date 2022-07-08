 const n = 124;
    const binary = n.toString(2)
    const groupsOfOne = binary.split("0")
    let biggerSequence = 0

    for (const g of groupsOfOne) {
        if (g.length > biggerSequence) {
            biggerSequence = g.length
        }
    }
    
    console.log(biggerSequence)
