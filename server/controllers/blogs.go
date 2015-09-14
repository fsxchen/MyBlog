package controllers

import (
    "GoWeb/server/models"
    "github.com/astaxie/beego"
    // "encoding/json"
)

type BlogsController struct {
    beego.Controller
}

func (u *BlogsController) Get(){
    // var b models.Blog
    bs := models.GetAll()
    u.Data["json"] = bs
    u.ServeJson()
}

func (u *BlogsController) Post(){
    var b models.Blog
    b.title = "hello";
    b.Content = "This is a test blog"
    models.SaveBlog(b)
    u.ServeJson()
}
