let length = 4;

function callback()
{
    console.log(this.length); //length of window obj
}

const obj = {
    langth : 5,
    method(callback){
        callback();
    }
};
obj.method(callback, 1,2); // 0