function same(lst1, lst2) {
    if (!lst1 && !lst2) {
        return false;
    } else {
        let lst1Map = {};
        for (let num of lst1) {
            lst1Map[num] = (lst1Map[num] || 0) + 1;
        }
        let lst2Map = {};
        for (let num of lst2) {
            lst2Map[num] = (lst2Map[num] || 0) + 1;
        }
        for (let i in lst1Map) {
            if (lst1Map[i] !== lst2Map[i]) {
                return false;
            }
        }
        return true;
    }
}

console.log(same([1, 2, 1], [4, 4, 1]));
