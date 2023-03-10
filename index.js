let tablinks = document.getElementsByClassName('tablinks');
let tabcontents = document.getElementsByClassName('tabcontents');
function opentab(tabname){
    for (tablinks of tablinks){
        tablinks.classlist.remove("activelink");
    }
    for (tabcontents of tabcontents){
        tabcontents.classlist.remove("activetab");
    }
    Event.currentTarget.classlist.add("activelink");
}