from flask import *
from flask_cors import *
import json
app = Flask(__name__)
cors= CORS(app)


@app.route('/showPlugins/<name>',methods=['GET'])
def loadPlugin(name):
    data=json.loads(open("plugins.json").read())
    return make_response(json.dumps(data[name]),200,{"content-type":"text"})


app.run(debug=True)