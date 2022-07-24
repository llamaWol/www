package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

const port = ":3000"

func main() {
	tmpl, err := template.ParseGlob("pages/*")
	if err != nil {
		panic(err.Error())
		return
	}

	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("./backdoor"))
	mux.Handle("/backdoor/", http.StripPrefix("/backdoor/", fs))

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		err = tmpl.ExecuteTemplate(w, "home", nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})
	mux.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
		err = tmpl.ExecuteTemplate(w, r.URL.Path[1:], nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})
	mux.HandleFunc("/contact", func(w http.ResponseWriter, r *http.Request) {
		err = tmpl.ExecuteTemplate(w, r.URL.Path[1:], nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})
	mux.HandleFunc("/egg", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello there\nWhat are you doing here?"))
	})

	fmt.Printf("Listening on port %s\n", port)
	log.Fatal(http.ListenAndServe(port, mux))
}
