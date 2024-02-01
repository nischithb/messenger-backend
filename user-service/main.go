package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func main() {
	const port = 2000
	addr := fmt.Sprintf("localhost:%d", port)

	router := chi.NewRouter()
	router.Get("/api", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Done"))
	})

	server := &http.Server{Addr: addr, Handler: router}

	log.Printf("Server listening on port %d", port)
	log.Fatal(server.ListenAndServe())
}
