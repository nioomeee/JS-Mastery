let todo = [];

let req = prompt("Enter your request");

while(true)
{
    if(req == 'quit')
    {
        console.log("quitting app");
        break;
    }
    
    if(req == 'list')
    {
        console.log("----------");

        for(let i = 0; i < todo.length; i ++)
        {
            console.log(i, todo[i]);
        }

        console.log("----------");
    }
    else if(req == 'add')
    {
        let newTask = prompt("Enter your desired task");

        todo.push(newTask);
        console.log("task added");
    }

    else if(req == 'delete')
    {
        let indx = prompt("ENter the index of the task to be deleted");
        todo.splice(indx, 1);
        console.log("Deleted the task");
        console.log("----------");
    }

    req = prompt("Enter your request");


}