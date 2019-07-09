const functions=require('../main');
//测试isStartNumberSmallEqualEndNumber
it('should be false when startNum is bigger than endNum',() =>{
    expect(functions.isStartNumberSmallEqualEndNumber(2,1)).toBe(false);
});
it('should be true when startNum is smaller than endNum',() =>{
    expect(functions.isStartNumberSmallEqualEndNumber(1,2)).toBe(true);
});
it('should be true when startNum is equal to endNum',() =>{
    expect(functions.isStartNumberSmallEqualEndNumber(2,2)).toBe(true);
});
//测试isInRange1to1000
it('should be false when startNum is not in range of 1 to 1000 and endNumber is in range of 1 to 1000',() =>{
    expect(functions.isInRange1to1000(0,1)).toBe(false);
});
it('should be false when startNum is in range of 1 to 1000 and endNumber is not in range of 1 to 1000',() =>{
    expect(functions.isInRange1to1000(1,1001)).toBe(false);
});
it('should be false when startNum is not in range of 1 to 1000 and endNumber is not in range of 1 to 1000',() =>{
    expect(functions.isInRange1to1000(0,1001)).toBe(false);
});
it('should be true when startNum is in range of 1 to 1000 and endNumber is in range of 1 to 1000',() =>{
    expect(functions.isInRange1to1000(1,2)).toBe(true);
});
//测试createMultipyEquation
it('should return equation like multiplier1 * multiplier2 = the reuslt of multipy them',() =>{
    expect(functions.createMultipyEquation(2,3)).toBe('2 * 3 = 6');
});
//测试generateMultipyTable
it('should return a multiplication table start with startNumber end with endNumber',() =>{
    expect(functions.generateMultipyTable(2,4)).toBe('2 * 2 = 4  \n2 * 3 = 6  3 * 3 = 9  \n2 * 4 = 8  3 * 4 = 12  4 * 4 = 16  \n');
});
//测试createMultipyTable
it('should return null when startNumber is not smaller than or equal to endNumber',() =>{
    expect(functions.createMultipyTable(3,1)).toBe(null);
});
it('should return prompt when startNumber or endNumber is not in range of 1 to 1000',() =>{
    expect(functions.createMultipyTable(-2,4)).toBe('startNumber or endNumber is not in range of 1 to 1000');
});
it('should return a multiplication table start with startNum end with endNum',() =>{
    expect(functions.createMultipyTable(2,4)).toBe('2 * 2 = 4  \n2 * 3 = 6  3 * 3 = 9  \n2 * 4 = 8  3 * 4 = 12  4 * 4 = 16  \n');
});