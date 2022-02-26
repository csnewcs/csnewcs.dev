package main

import (
	"fmt"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

const port string = ":8080"

func mainGet(e echo.Context) error {
	fmt.Println("접속")
	return e.File("Pages/MainPage.html")
}

func main() {
	fmt.Println("hello")
	echoServer := echo.New()
	echoServer.Use(middleware.Static("./Pages"))
	echoServer.GET("/", mainGet)
	echoServer.Logger.Fatal(echoServer.Start(port))
}
