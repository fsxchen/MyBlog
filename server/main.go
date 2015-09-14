package main

import (
	// _ "GoWeb/server/docs"
	_ "GoWeb/server/routers"
 //    "GoWeb/server/controllers"

	"github.com/astaxie/beego"
)

func main() {
	if beego.RunMode == "dev" {
		beego.DirectoryIndex = true
		beego.StaticDir["../client"] = "client"
	}
	beego.Run()
}
