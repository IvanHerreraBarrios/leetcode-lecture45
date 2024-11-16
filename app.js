var countPoints = function(points, queries) {
    const result = []
    for(const circle of queries){
        let numPoints = 0
        for(const point of points){
            const dist = distance(circle, point)
            const radius = circle[2]
            if(dist <= radius) numPoints++
        }
        result.push(numPoints)
    }
    return result
};

function distance(p1, p2){
    const dx = p1[0] - p2[0]
    const dy = p1[1] - p2[1]
    return Math.sqrt(dx**2 + dy**2)
}