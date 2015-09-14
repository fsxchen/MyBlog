package routers

import (
    "GoWeb/server/controllers"
    "github.com/astaxie/beego"
)

func init() {
    // ns := beego.NewNamespace("v1",
    //         beego.NSNamespace("/blogs",
    //                  beego.NSInclude(
    //                         &controllers.BlogsController{},
    //                  ),
    //             ),
    //         )
    // beego.AddNamespace(ns)
    beego.RESTRouter("/blogs", &controllers.BlogsController{})
}
