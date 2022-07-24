package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseGlob("pages/*")
	if err != nil {
		panic(err.Error())
		return
	}
	err = tmpl.ExecuteTemplate(w, r.URL.Path[1:], r.URL.Path[1:])
	if err != nil {
		http.Error(w, fmt.Sprintf("Couldnt find page ?? %s", r.URL.Path[1:]), http.StatusInternalServerError)
	}
}

func main() {
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("./backdoor"))
	mux.Handle("/backdoor/", http.StripPrefix("/backdoor/", fs))

	// Redirect to homepage if page would return 404
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "/home", http.StatusSeeOther)
	})

	mux.HandleFunc("/home", Handler)
	mux.HandleFunc("/about", Handler)
	mux.HandleFunc("/contact", Handler)

	// Secret page, don't tell anyone
	mux.HandleFunc("/egg", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hi there\n\nWhat are you doing here?"))
	})

	fmt.Println("Listening...")
	log.Fatal(http.ListenAndServe(":3333", mux))
}
