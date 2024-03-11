const idea_controller=require("../controllers/ideas.controller");
//Route for get 192.168.131.9:8000/IdeaApp/api/v1/ideas

module.exports=(app)=>{
    app.get("/IdeaApp/api/v1/ideas",idea_controller.getAllIdea);
    app.get("/IdeaApp/api/v1/ideas/:id",idea_controller.getIdeaBasedOnId);
    app.post("/IdeaApp/api/v1/ideas",idea_controller.createIdea);
    app.put("/IdeaApp/api/v1/ideas/:id",idea_controller.updateIdea);
    app.delete("/IdeaApp/api/v1/ideas/:id",idea_controller.deleteIdea);
    
}

