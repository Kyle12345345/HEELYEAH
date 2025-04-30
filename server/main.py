from backend import create_website, db

app = create_website()

if __name__ == "__main__":
    # app.run(debug=True, host="192.168.0.17", port=1234) 
    app.run(debug=True)
