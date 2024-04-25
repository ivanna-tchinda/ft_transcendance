import hvac

def init_server():
    client = hvac.Client(url='https://localhost:8200')
    print(f" Is client authenticated: {client.is_authenticated()}")

init_server()