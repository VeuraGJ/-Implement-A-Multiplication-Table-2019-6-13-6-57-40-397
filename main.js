function createMultipyTable(startNumber,endNumber){
    if(isStartNumberSmallEqualEndNumber(startNumber,endNumber)){
        if(isInRange1to1000(startNumber,endNumber)){
            return generateMultipyTable(startNumber,endNumber);
        }else return 'startNumber or endNumber is not in range of 1 to 1000';
    }else return null;
}
function isStartNumberSmallEqualEndNumber(startNumber,endNumber){
    return startNumber<=endNumber;
}
function isInRange1to1000(startNumber,endNumber){
    return (startNumber>=1&&startNumber<=1000)&&(endNumber>=1&&endNumber<=1000);
}
function generateMultipyTable(startNumber,endNumber){
    var multipyTable='';
    for(let i=startNumber;i<=endNumber;i++){
        for(let j=startNumber;j<=i;j++){
            multipyTable=multipyTable+createMultipyEquation(j,i)+'  ';
        }
        multipyTable+='\n';
    }
    return multipyTable;
}
function createMultipyEquation(multiplier1,multiplier2){
    return multiplier1+' * '+multiplier2+' = '+(multiplier1*multiplier2);
}
module.exports={
    createMultipyTable,
    isStartNumberSmallEqualEndNumber,
    isInRange1to1000,
    generateMultipyTable,
    createMultipyEquation
}