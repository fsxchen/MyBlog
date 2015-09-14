package main

import (
	_ "GoWeb/server/docs"
	_ "GoWeb/server/routers"
    "GoWeb/server/controllers"

	"github.com/astaxie/beego"
)

func main() {
	if beego.RunMode == "dev" {
		beego.DirectoryIndex = true
		beego.StaticDir["/swagger"] = "swagger"
	}
    beego.RESTRouter("/object", &controllers.ObjectController{})
    beego.RESTRouter("/user", &controllers.UserController{})
	beego.Run()
}
