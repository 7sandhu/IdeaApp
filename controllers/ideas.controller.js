//write the logic to create controllers for the idea resource


const ideas=require("../models/ideas.model");

let id=3 //initial count of id

// Create the controller for fetching all the ideas

// get 192.168.131.9:8000/IdeaApp/api/v1/ideas

// Return the list of all ideas




exports.getAllIdea=(req,res)=>{

    //First read all ideas from the idea modal file

    //return all those ideas

    res.status(200).send(ideas);
}


//Controller that fetches idea based on Id
// get 192.168.131.9:8000/IdeaApp/api/v1/ideas/2

exports.getIdeaBasedOnId=(req,res)=>{
    //We need to first read the idea id from thereq path param
    idea_id=req.params.id

    //Using Id,check if the with the Id is present
    if(ideas[idea_id]){
        //If present return the Idea with given id
        res.status(200).send(ideas[idea_id]);
    }else{
        res.status(404).send({
            message:"Idea with the given id is not found"
        })
    }

    //If present return the Idea with given id
}


//Controller to create a new idea

exports.createIdea=(req,res)=>{
    //I need to read the request body
    idea_object=req.body;
    id++;
    idea_object["id"]=id; //Setting up the id in the new created idea object

    //Add the new object provided in the ideas object
    ideas[id]=idea_object;

    //return the response
    res.status(201).send(ideas);
    
}

exports.updateIdea=(req,res)=>{
    //Read the idea id
    idea_id=req.params.id;

    //Check if that id is present
    if(ideas[idea_id]){
        //read the new idea body and replace it
        idea_obj=req.body;
        ideas[idea_id]=idea_obj;
        
        //Return the updated idea
        res.status(200).send(idea_obj)
    }else{
        res.status(404).send({
            message:"Idea id you wanted to update doesn't exist"
        })
    }

}

exports.deleteIdea=(req,res)=>{
    //fetch the idea and see if it's present
    idea_id=req.params.id;

    if(ideas[idea_id]){
        //Delete if it present
        delete ideas[idea_id];
        res.status(200).send({
            message:"deleted successfully"
        })
    }else{
        res.status(404).send({
            message:"Idea id you wanted to delete is not present"
        })
    }
}


