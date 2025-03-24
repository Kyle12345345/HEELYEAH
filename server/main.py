from backend import create_website, db

app = create_website()

if __name__ == "__main__":
    app.run(debug=True)
