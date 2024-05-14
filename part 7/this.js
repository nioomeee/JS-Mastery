let student = {
    Name: "Niomi",
    Age: 18,
    Adv_C: 98,
    JS: 89,
    DBS: 99,
    getavg()
    {
        console.log(this); //student object printed here
        let avg = ((this.Adv_C + this.JS + this.DBS)/3).toFixed(2);
        console.log(avg);
    }
}

console.log(student.getavg());

function New(){
    console.log(this);
    // Window object will be displayed
}

console.log(New());
