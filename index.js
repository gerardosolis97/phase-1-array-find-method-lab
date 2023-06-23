// code your solution here
function superbowlWin(record){

    const win = record.find(superbowl => superbowl.result === "W");
    return win ? win.year : undefined;
}