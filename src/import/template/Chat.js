const Chat = ()=>{
    return (
        <div className="Chat p-3">
            <header className="chat-search px-3 py-2 bubble bubble-pill d-flex">
                <input placeholder="Best song ever"></input>
                <ion-icon name="search-outline"></ion-icon>
            </header>
            <main className="mt-5">
                <header className="main-header d-flex justify-content-center align-items-center">
                    <a>Followers</a>
                    <a className="active">Chat</a>
                    <a>Comment</a>
                </header>
                <main className="main-chat my-5 py-2 px-3">
                    <div className="card-chat py-3">
                        <img className="rounded-circle user-head-img bg-light" alt="User" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDEgNTEyLjAxIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMi4wMSA1MTIuMDEiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IlhNTElEXzIxMTJfIj48cGF0aCBpZD0iWE1MSURfMzAwM18iIGQ9Im0yMzIuMjEzIDMzNy4yNjcgMjYuNDA3IDE3LjM5NGMxNS4zNjIgMTAuMTE4IDM0LjIzIDEzLjQxNyA1Mi4xMTQgOS4xMTFsMTM4LjIzOSAxMzguMjM5IDUzLjAzMi0xNDAuMTcxLTg1LjUyMS04NS41MjFjMC0xNS44NTQtMS45MTYtMzEuNTExLTUuNjIxLTQ2LjY2eiIgZmlsbD0iI2ZmYmY5ZSIvPjxwYXRoIGlkPSJYTUxJRF8xNDMyXyIgZD0ibTQzMy44MTkgMTcyLjc4M2MtOS4zNjctOS4zNjctMjQuNTUzLTkuMzY3LTMzLjkxOSAwIDkuMzY2LTkuMzY3IDkuMzY2LTI0LjU1MyAwLTMzLjkxOS05LjM2Ny05LjM2Ni0yNC41NTMtOS4zNjYtMzMuOTE5IDAgOS4zNjctOS4zNjYgOS4zNjctMjQuNTUzIDAtMzMuOTE5LTkuMzY2LTkuMzY3LTI0LjU1My05LjM2Ny0zMy45MTkgMCA5LjM2Ni05LjM2NyA5LjM2Ni0yNC41NTMgMC0zMy45MTktOS4zNjctOS4zNjYtMjQuNTUzLTkuMzY2LTMzLjkxOSAwbC00MS41NDMgNDEuNTQzLTEyNi44MjYgMTQ1LjY5NS0xMTkuNTMgMTE5LjUzIDQ3LjQwNiAxMjMuNzA2IDE1NC42MDQtMTU0LjYwNGM4LjY4OC04LjY4OCAyMC40NzMtMTMuNTcgMzIuNzYtMTMuNTcgMzkuODEzIDAgNzcuOTk2LTE1LjgxNiAxMDYuMTQ5LTQzLjk2OGw4Mi42NTYtODIuNjU2YzkuMzY3LTkuMzY2IDkuMzY3LTI0LjU1MyAwLTMzLjkxOXoiIGZpbGw9IiNmZmQ0YmUiLz48cGF0aCBpZD0iWE1MSURfMTQyOV8iIGQ9Im05My41NSAyOTQuNDg5IDg1LjU1NiA4NS41NTYgMzMuMTQ4LTMzLjE0OGMxLjAzMS0xLjAzMSAyLjExLTIuMDA1IDMuMjI0LTIuOTI4bC04NS43MDQtODUuNzA0eiIgZmlsbD0iIzkxZGVmNSIvPjxwYXRoIGlkPSJYTUxJRF8xNDI3XyIgZD0ibTMyNS43NjggMzI0Ljg5OGgxMzYuNjE1djUxLjIyOWgtMTM2LjYxNXoiIGZpbGw9IiNmNjgzOGQiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IC0xMzIuNDI3IDM4MS4zMTcpIi8+PGcgaWQ9IlhNTElEXzI5NzNfIiBmaWxsPSIjZmZiZjllIj48cGF0aCBpZD0iWE1MSURfMjk3Nl8iIGQ9Im0xNjMuNjk0IDIyNC4zNDUtMzYuMDEzLTM2LjAxM2MtOS4zNjctOS4zNjctOS4zNjctMjQuNTUzIDAtMzMuOTE5IDkuMzY3LTkuMzY3IDI0LjU1My05LjM2NyAzMy45MTkgMGwzNi4wMTMgMzYuMDEzYzkuMzY3IDkuMzY3IDkuMzY3IDI0LjU1MyAwIDMzLjkxOS05LjM2NyA5LjM2Ny0yNC41NTMgOS4zNjctMzMuOTE5IDB6Ii8+PHBhdGggaWQ9IlhNTElEXzI5NzVfIiBkPSJtMTk3LjYxMyAxOTAuNDI2LTM2LjAxMy0zNi4wMTNjLTkuMzY3LTkuMzY3LTkuMzY3LTI0LjU1MyAwLTMzLjkxOSA5LjM2Ny05LjM2NyAyNC41NTMtOS4zNjcgMzMuOTE5IDBsMzYuMDEzIDM2LjAxM2M5LjM2NyA5LjM2NyA5LjM2NyAyNC41NTMgMCAzMy45MTktOS4zNjYgOS4zNjYtMjQuNTUzIDkuMzY2LTMzLjkxOSAweiIvPjxwYXRoIGlkPSJYTUxJRF8yOTc0XyIgZD0ibTIzMS41MzIgMTU2LjUwNy0zNi4wMTMtMzYuMDEzYy05LjM2Ny05LjM2Ny05LjM2Ny0yNC41NTMgMC0zMy45MTkgOS4zNjctOS4zNjcgMjQuNTUzLTkuMzY3IDMzLjkxOSAwbDM2LjAxMyAzNi4wMTNjOS4zNjcgOS4zNjcgOS4zNjcgMjQuNTUzIDAgMzMuOTE5LTkuMzY2IDkuMzY2LTI0LjU1MiA5LjM2Ni0zMy45MTkgMHoiLz48L2c+PGcgaWQ9IlhNTElEXzE0MjVfIj48cGF0aCBpZD0iWE1MSURfMjk3Ml8iIGQ9Im0xMjkuNzc0IDI1OC4yNjQtMjEuMjI2LTIxLjIyNmMtOS4zNjctOS4zNjctOS4zNjctMjQuNTUzIDAtMzMuOTE5IDkuMzY3LTkuMzY3IDI0LjU1My05LjM2NyAzMy45MTkgMGwyMS4yMjYgMjEuMjI2YzkuMzY3IDkuMzY3IDkuMzY3IDI0LjU1MyAwIDMzLjkxOS05LjM2NiA5LjM2Ny0yNC41NTIgOS4zNjctMzMuOTE5IDB6IiBmaWxsPSIjZmZiZjllIi8+PC9nPjxnIGlkPSJYTUxJRF80MjhfIj48cGF0aCBpZD0iWE1MSURfNzYwXyIgZD0ibTQzNC45OSAyODAuNjgzYy0uMDQyLTE3LjEyNi00LjA3OC0zMy45NTctMTEuNzczLTQ5LjIzNmwxNy42NzQtMTcuNjc0YzEzLjI1LTEzLjI1IDEzLjI1LTM0LjgxMSAwLTQ4LjA2Mi02LjYwOS02LjYwOS0xNS4yODUtOS45Mi0yMy45NjctOS45MzYtLjAxMi05LjA2LTMuNTQ1LTE3LjU3NS05Ljk1Mi0yMy45ODMtNi42MTMtNi42MTItMTUuMjk2LTkuOTI0LTIzLjk4My05LjkzNi0uMDEyLTguNjg3LTMuMzI0LTE3LjM3LTkuOTM3LTIzLjk4My02LjQwNC02LjQwMy0xNC45MTQtOS45MzYtMjMuOTY3LTkuOTUyLS4wMTctOS4wNTMtMy41NDktMTcuNTYzLTkuOTUyLTIzLjk2Ny02LjQxOS02LjQxOS0xNC45NTQtOS45NTQtMjQuMDMxLTkuOTU0cy0xNy42MTIgMy41MzUtMjQuMDMgOS45NTRsLTM1LjA1NiAzNS4wNTYtMTkuNTA2LTE5LjUwN2MtNi40MTktNi40MTktMTQuOTUzLTkuOTU0LTI0LjAzMS05Ljk1NHMtMTcuNjEyIDMuNTM1LTI0LjAzIDkuOTU0Yy02LjQwOCA2LjQwOC05Ljk0IDE0LjkyMy05Ljk1MyAyMy45ODMtOC42ODEuMDE2LTE3LjM1OCAzLjMyNy0yMy45NjcgOS45MzYtNi40MDQgNi40MDQtOS45MzYgMTQuOTEzLTkuOTUzIDIzLjk2Ny05LjA1My4wMTctMTcuNTYzIDMuNTQ5LTIzLjk2NyA5Ljk1My0xMC45NDIgMTAuOTQyLTEyLjgzOCAyNy41NDctNS43MDkgNDAuNDY0LTQuOTEgMS42MDUtOS41MjcgNC4zNDYtMTMuNDIzIDguMjQyLTEzLjI1IDEzLjI1MS0xMy4yNSAzNC44MTEgMCA0OC4wNjJsMTQuMTU1IDE0LjE1NS0xMTIuNDU4IDExMi40NThjLTMuOTA1IDMuOTA1LTMuOTA1IDEwLjIzNyAwIDE0LjE0MyAxLjk1MyAxLjk1MiA0LjUxMiAyLjkyOSA3LjA3MSAyLjkyOXM1LjExOS0uOTc3IDcuMDcxLTIuOTI5bDc2LjIzNC03Ni4yMzQgNzEuNDEzIDcxLjQxMy0xMTQuMzg0IDExNC4zODRjLTMuOTA1IDMuOTA1LTMuOTA1IDEwLjIzNyAwIDE0LjE0MyAxLjk1MyAxLjk1MiA0LjUxMiAyLjkyOSA3LjA3MSAyLjkyOXM1LjExOS0uOTc3IDcuMDcxLTIuOTI5bDE1NC42MDQtMTU0LjYwNGMyLjg0OC0yLjg0OCA2LjA5LTUuMTU2IDkuNTk4LTYuODkybDI0LjE5NiAxNS45MzdjMTYuMDAzIDEwLjU0IDM1LjUxNCAxNC42NTggNTQuMzI1IDExLjYxMmwxMzQuNDU3IDEzNC40NTdjMS45NTMgMS45NTIgNC41MTIgMi45MjkgNy4wNzEgMi45MjlzNS4xMTktLjk3NyA3LjA3MS0yLjkyOWMzLjkwNS0zLjkwNSAzLjkwNS0xMC4yMzcgMC0xNC4xNDNsLTc4LjAxNC03OC4wMTQgOS40MzEtOS40MzFjMy45MDUtMy45MDUgMy45MDUtMTAuMjM3IDAtMTQuMTQzLTMuOTA1LTMuOTA0LTEwLjIzNy0zLjkwNC0xNC4xNDMgMGwtOS40MzEgOS40MzEtMjIuMDgxLTIyLjA4MSA4Mi40NTgtODIuNDU5IDIyLjA4MiAyMi4wODItOS40MSA5LjQxYy0zLjkwNSAzLjkwNi0zLjkwNSAxMC4yMzcgMCAxNC4xNDMgMS45NTMgMS45NTIgNC41MTIgMi45MjkgNy4wNzEgMi45MjlzNS4xMTktLjk3NyA3LjA3MS0yLjkyOWw5LjQxLTkuNDEgMzQuNDQ1IDM0LjQ0NWMxLjk1MyAxLjk1MiA0LjUxMiAyLjkyOSA3LjA3MSAyLjkyOXM1LjExOS0uOTc3IDcuMDcxLTIuOTI5YzMuOTA1LTMuOTA1IDMuOTA1LTEwLjIzNyAwLTE0LjE0M3ptLTEyOS43NzYtMjAyLjU4N2MyLjY0MS0yLjY0MSA2LjE1My00LjA5NiA5Ljg4OC00LjA5NnM3LjI0NyAxLjQ1NSA5Ljg4OCA0LjA5NmMyLjY0MiAyLjY0MSA0LjA5NiA2LjE1MyA0LjA5NiA5Ljg4OCAwIDMuNzM2LTEuNDU1IDcuMjQ4LTQuMDk2IDkuODg5bC0yMS45NzUgMjEuOTc1Yy0zLjkwNSAzLjkwNS0zLjkwNSAxMC4yMzcgMCAxNC4xNDNzMTAuMjM3IDMuOTA1IDE0LjE0MyAwbDIxLjk3NS0yMS45NzVjMi42NDEtMi42NDIgNi4xNTMtNC4wOTYgOS44ODktNC4wOTYgMy43MzUgMCA3LjI0NyAxLjQ1NSA5Ljg4OCA0LjA5NiA1LjQ1MyA1LjQ1MyA1LjQ1MyAxNC4zMjQgMCAxOS43NzdsLTMzLjU1NiAzMy41NTZjLTMuOTA1IDMuOTA1LTMuOTA1IDEwLjIzNyAwIDE0LjE0MyAxLjk1MyAxLjk1MyA0LjUxMiAyLjkyOSA3LjA3MSAyLjkyOXM1LjExOS0uOTc2IDcuMDcxLTIuOTI5bDMzLjU1Ni0zMy41NTZjMi42NDEtMi42NDIgNi4xNTMtNC4wOTYgOS44ODgtNC4wOTYgMy43MzYgMCA3LjI0OCAxLjQ1NSA5Ljg4OSA0LjA5NnM0LjA5NiA2LjE1MyA0LjA5NiA5Ljg4OC0xLjQ1NSA3LjI0Ny00LjA5NiA5Ljg4OGwtMzMuNTU2IDMzLjU1NmMtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQzIDEuOTUzIDEuOTUzIDQuNTEyIDIuOTI5IDcuMDcxIDIuOTI5czUuMTE5LS45NzYgNy4wNzEtMi45MjlsMzMuNTU1LTMzLjU1NmM1LjQ1Mi01LjQ1MyAxNC4zMjUtNS40NTIgMTkuNzc3IDAgNS40NTMgNS40NTMgNS40NTMgMTQuMzI1IDAgMTkuNzc3bC04Mi42NTYgODIuNjU2Yy0yNi40NjQgMjYuNDY1LTYxLjY1IDQxLjA0LTk5LjA3OCA0MS4wNC0xMC4xMzUgMC0xOS44NTcgMi42NjktMjguMzc5IDcuNjU2bC01Ny44ODEtNTcuODgxYzQuNDU0LTEuNjgyIDguNTQyLTQuMjk5IDEyLjAxLTcuNzY3IDYuNDA4LTYuNDA4IDkuOTQtMTQuOTIzIDkuOTUzLTIzLjk4MyA4LjY4MS0uMDE2IDE3LjM1OC0zLjMyOCAyMy45NjctOS45MzdzOS45Mi0xNS4yODUgOS45MzYtMjMuOTY3YzkuMDYtLjAxMiAxNy41NzYtMy41NDUgMjMuOTgzLTkuOTUzIDYuNjA5LTYuNjA5IDkuOTItMTUuMjg1IDkuOTM2LTIzLjk2NyA5LjA2LS4wMTIgMTcuNTc1LTMuNTQ1IDIzLjk4Mi05Ljk1MiA2LjQxOS02LjQxOSA5Ljk1NC0xNC45NTMgOS45NTQtMjQuMDMxcy0zLjUzNS0xNy42MTItOS45NTQtMjQuMDMxbC0yLjM2NS0yLjM2NXptLTEwMi42MjMgMTUuNTQ5YzIuNjQxLTIuNjQxIDYuMTUzLTQuMDk2IDkuODg4LTQuMDk2czcuMjQ3IDEuNDU1IDkuODg4IDQuMDk2bDM2LjAxNCAzNi4wMTNjMi42NDEgMi42NDEgNC4wOTYgNi4xNTMgNC4wOTYgOS44ODhzLTEuNDU1IDcuMjQ3LTQuMDk2IDkuODg5Yy0yLjY0MSAyLjY0MS02LjE1MyA0LjA5Ni05Ljg4OCA0LjA5Ni0zLjczNCAwLTcuMjQ0LTEuNDU0LTkuODg1LTQuMDkzLS4wMDEtLjAwMS0uMDAyLS4wMDItLjAwMy0uMDA0bC0zNi4wMTQtMzYuMDEzYy0yLjY0MS0yLjY0MS00LjA5Ni02LjE1My00LjA5Ni05Ljg4OHMxLjQ1NC03LjI0NiA0LjA5Ni05Ljg4OHptLTMzLjkyIDMzLjkxOWMyLjcyNy0yLjcyNyA2LjMwNy00LjA4OSA5Ljg4OS00LjA4OSAzLjU4MSAwIDcuMTYzIDEuMzYzIDkuODg4IDQuMDg5bDM2LjAxMyAzNi4wMTNjNS40NTMgNS40NTMgNS40NTIgMTQuMzI1IDAgMTkuNzc4LTIuNjQxIDIuNjQxLTYuMTUzIDQuMDk2LTkuODg4IDQuMDk2LTMuNzM0IDAtNy4yNDQtMS40NTQtOS44ODUtNC4wOTMtLjAwMS0uMDAxLS4wMDItLjAwMi0uMDAzLS4wMDRsLTM2LjAxMy0zNi4wMTNjLTIuNjQyLTIuNjQxLTQuMDk2LTYuMTUzLTQuMDk2LTkuODg5LS4wMDEtMy43MzUgMS40NTQtNy4yNDYgNC4wOTUtOS44ODh6bS0zMy45MTkgMzMuOTJjMi42NDEtMi42NDIgNi4xNTMtNC4wOTYgOS44ODgtNC4wOTYgMy43MzYgMCA3LjI0OCAxLjQ1NSA5Ljg4OSA0LjA5NmwzNi4wMTMgMzYuMDEzYzUuNDUzIDUuNDUzIDUuNDUzIDE0LjMyNSAwIDE5Ljc3N3MtMTQuMzI1IDUuNDUzLTE5Ljc3OCAwbC0zNi4wMTMtMzYuMDEzYy01LjQ1Mi01LjQ1Mi01LjQ1Mi0xNC4zMjUuMDAxLTE5Ljc3N3ptLTE5LjEzMyA0OC43MDZjMi43MjctMi43MjcgNi4zMDgtNC4wODkgOS44ODktNC4wODkgMy41NzYgMCA3LjE1NCAxLjM2MSA5Ljg3OCA0LjA4bDIxLjIzNiAyMS4yMzZjMi42NDEgMi42NDEgNC4wOTYgNi4xNTMgNC4wOTYgOS44ODhzLTEuNDU1IDcuMjQ3LTQuMDk2IDkuODg5LTYuMTUzIDQuMDk2LTkuODg5IDQuMDk2Yy0zLjczMiAwLTcuMjQyLTEuNDUzLTkuODgzLTQuMDkxbC0uMDA1LS4wMDUtMjEuMjI2LTIxLjIyNmMtNS40NTItNS40NTQtNS40NTItMTQuMzI2IDAtMTkuNzc4em0tNy45MjYgODQuMjk5IDIyLjA4Mi0yMi4wODIgNzEuNDE0IDcxLjQxMy0yMi4wODIgMjIuMDgyem0yMTAuMTEyIDYyLjIxMWMtMi40NjMtMi40NjItNi4wMjktMy40NzEtOS40MTMtMi42NS0xNS4xMzUgMy42NDMtMzEuMjcxLjgyMy00NC4yNzEtNy43NGwtNS40MTYtMy41NjhjMzcuNjA1LTMuMTY0IDcyLjUzOS0xOS4zMiA5OS41My00Ni4zMTJsNDkuOTA2LTQ5LjkwNWM0LjI5MyAxMC4zNzUgNi42MDkgMjEuNDY0IDYuODIyIDMyLjczNmwtODcuMjk4IDg3LjI5OXoiLz48cGF0aCBpZD0iWE1MSURfODA1XyIgZD0ibTQwNS4xMTUgMzYxLjU1NWMtMS44NiAxLjg2LTIuOTMgNC40My0yLjkzIDcuMDcgMCAyLjYzIDEuMDcgNS4yMSAyLjkzIDcuMDY5IDEuODYgMS44NiA0LjQ0IDIuOTMxIDcuMDcgMi45MzEgMi42NCAwIDUuMjEtMS4wNyA3LjA3LTIuOTMxIDEuODYtMS44NTkgMi45My00LjQzOSAyLjkzLTcuMDY5IDAtMi42NDEtMS4wNy01LjIxLTIuOTMtNy4wN3MtNC40NC0yLjkzLTcuMDctMi45My01LjIxIDEuMDctNy4wNyAyLjkzeiIvPjxwYXRoIGlkPSJYTUxJRF84MDlfIiBkPSJtNjcuNTYzIDgxLjdjMS45NTMgMS45NTMgNC41MTIgMi45MjkgNy4wNzEgMi45MjlzNS4xMTktLjk3NiA3LjA3MS0yLjkyOWMzLjkwNS0zLjkwNSAzLjkwNS0xMC4yMzcgMC0xNC4xNDNsLTQ3LjA3MS00Ny4wNzFjLTMuOTA1LTMuOTA1LTEwLjIzNy0zLjkwNS0xNC4xNDMgMHMtMy45MDUgMTAuMjM3IDAgMTQuMTQzeiIvPjxwYXRoIGlkPSJYTUxJRF84NThfIiBkPSJtMTIyLjAwNSA1NC41MTZjNS41MjMgMCAxMC00LjQ3NyAxMC0xMHYtMzQuNTE2YzAtNS41MjMtNC40NzctMTAtMTAtMTBzLTEwIDQuNDc3LTEwIDEwdjM0LjUxNmMwIDUuNTIzIDQuNDc3IDEwIDEwIDEweiIvPjxwYXRoIGlkPSJYTUxJRF8xMDE0XyIgZD0ibTEwLjAwNSAxMzJoMzQuNTE2YzUuNTIzIDAgMTAtNC40NzcgMTAtMTBzLTQuNDc3LTEwLTEwLTEwaC0zNC41MTZjLTUuNTIzIDAtMTAgNC40NzctMTAgMTBzNC40NzcgMTAgMTAgMTB6Ii8+PHBhdGggaWQ9IlhNTElEXzEwMjBfIiBkPSJtNDM3LjM3NiA4NC42MjljMi41NTkgMCA1LjExOS0uOTc2IDcuMDcxLTIuOTI5bDQ3LjA3MS00Ny4wNzFjMy45MDUtMy45MDUgMy45MDUtMTAuMjM3IDAtMTQuMTQzcy0xMC4yMzctMy45MDUtMTQuMTQzIDBsLTQ3LjA3MSA0Ny4wNzFjLTMuOTA1IDMuOTA1LTMuOTA1IDEwLjIzNyAwIDE0LjE0MyAxLjk1NCAxLjk1MyA0LjUxMyAyLjkyOSA3LjA3MiAyLjkyOXoiLz48cGF0aCBpZD0iWE1MSURfMTAyOV8iIGQ9Im0zOTAuMDA1IDU0LjUxNmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwdi0zNC41MTZjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMHMtMTAgNC40NzctMTAgMTB2MzQuNTE2YzAgNS41MjMgNC40NzcgMTAgMTAgMTB6Ii8+PHBhdGggaWQ9IlhNTElEXzEwMzBfIiBkPSJtNDU3LjQ5IDEyMmMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwaDM0LjUxNmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ny0xMC0xMC0xMGgtMzQuNTE2Yy01LjUyMyAwLTEwIDQuNDc3LTEwIDEweiIvPjwvZz48L2c+PC9zdmc+" />
                        <div className="name ml-3">
                            <h5 className="theme-text">Followers <span className="ml-2 badge badge-pill badge-theme">Bot</span></h5>
                            <p>January: 10k+</p>
                        </div>
                        <div>
                            <span className="badge badge-pill badge-theme chat-alert"></span>
                        </div>
                    </div>
                    <div className="card-chat py-3">
                        <img className="rounded-circle user-head-img bg-light" alt="User" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IlhNTElEXzgyNV8iPjxnIGlkPSJYTUxJRF8xMzI4XyI+PHBhdGggaWQ9IlhNTElEXzEzMzRfIiBkPSJtNTAyIDI3MC4xNTktNDQgMTQuNDgydi0xMTEuMjgybDQ0IDE0LjQ4MnoiIGZpbGw9IiNmNTczN2YiLz48cGF0aCBpZD0iWE1MSURfMTMzM18iIGQ9Im0xMCAxODcuODQxIDQ0LTE0LjQ4MnYxMTEuMjgybC00NC0xNC40ODJ6IiBmaWxsPSIjODY5MGE2Ii8+PHBhdGggaWQ9IlhNTElEXzEzMzJfIiBkPSJtNTQgMTQ0Ljc4M2gxNTJ2MTY4LjQzM2gtMTUyeiIgZmlsbD0iIzkxZGVmNSIvPjxwYXRoIGlkPSJYTUxJRF8xMzMxXyIgZD0ibTM5OCA2Ny0xOTIgNzcuNzgzdjE2OC40MzRsMTkyIDc3Ljc4M3oiIGZpbGw9IiNmOWY5ZjkiLz48cGF0aCBpZD0iWE1MSURfMTMzMF8iIGQ9Im0xODIgMzE0LjMzM3YxNjAuNjY3aC01MmwtNDAuNjY3LTE2MC42Njd6IiBmaWxsPSIjODY5MGE2Ii8+PHBhdGggaWQ9IlhNTElEXzEzMjlfIiBkPSJtNDI4IDQyMWMtMTYuNTY5IDAtMzAtMTMuNDMxLTMwLTMwdi0zMjRjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwIDE2LjU2OSAwIDMwIDEzLjQzMSAzMCAzMHYzMjRjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMweiIgZmlsbD0iIzkxZGVmNSIvPjwvZz48ZyBpZD0iWE1MSURfMzkzXyI+PHBhdGggaWQ9IlhNTElEXzM5NF8iIGQ9Im0zOTggMjE5Yy0yLjYzIDAtNS4yMSAxLjA3LTcuMDcgMi45M3MtMi45MyA0LjQ0LTIuOTMgNy4wNyAxLjA2OSA1LjIxIDIuOTMgNy4wNyA0LjQ0IDIuOTMgNy4wNyAyLjkzIDUuMjEtMS4wNyA3LjA2OS0yLjkzYzEuODYtMS44NiAyLjkzMS00LjQ0IDIuOTMxLTcuMDdzLTEuMDctNS4yMS0yLjkzMS03LjA3Yy0xLjg1OS0xLjg2LTQuNDM5LTIuOTMtNy4wNjktMi45M3oiLz48cGF0aCBpZD0iWE1MSURfMzk3XyIgZD0ibTUwNS4xMjYgMTc4LjM0My0zNy4xMjYtMTIuMjJ2LTk5LjEyM2MwLTIyLjA1Ni0xNy45NDQtNDAtNDAtNDAtMTkuNjcgMC0zNi4wNTggMTQuMjc2LTM5LjM3NSAzMy4wMDlsLTE4NC41NzQgNzQuNzc1aC0xNTAuMDUxYy01LjUyMiAwLTEwIDQuNDc3LTEwIDEwdjIxLjM0bC0zNy4xMjYgMTIuMjE5Yy00LjEwMyAxLjM0OS02Ljg3NCA1LjE4LTYuODc0IDkuNDk4djgyLjMxN2MwIDQuMzE4IDIuNzcxIDguMTQ5IDYuODc0IDkuNDk5bDM3LjEyNiAxMi4yMnYyMS4zNGMwIDUuNTIzIDQuNDc4IDEwIDEwIDEwaDI3LjI2NmwzOS4wNCAxNTQuMjM3YzEuMTIzIDQuNDM4IDUuMTE2IDcuNTQ2IDkuNjk0IDcuNTQ2aDUyYzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTE1MS43ODNoMTIuMDUxbDE4NC41NzQgNzQuNzc1YzMuMzE3IDE4LjczMiAxOS43MDUgMzMuMDA4IDM5LjM3NSAzMy4wMDggMjIuMDU2IDAgNDAtMTcuOTQ0IDQwLTQwdi05OS4xMjNsMzcuMTI2LTEyLjIxOWM0LjEwMy0xLjM1IDYuODc0LTUuMTggNi44NzQtOS40OTl2LTgyLjMxN2MwLTQuMzE5LTIuNzcxLTguMTUtNi44NzQtOS40OTl6bS00ODUuMTI2IDg0LjU3OXYtNjcuODQ1bDI0LTcuODk5djgzLjY0NHptNDQtMTA4LjEzOWgxMzJ2MTQ4LjQzNGgtMTMyem0xMDggMzEwLjIxN2gtMzQuMjE2bC0zNS44ODctMTQxLjc4M2g3MC4xMDN6bTI3Ni03NGMwIDExLjAyOC04Ljk3MiAyMC0yMCAyMHMtMjAtOC45NzItMjAtMjB2LS4xMDVjMC0uMDIyIDAtLjA0NCAwLS4wNjZ2LTExNi44MjljMC01LjUyMy00LjQ3OC0xMC0xMC0xMHMtMTAgNC40NzctMTAgMTB2MTAyLjE1OWwtMTcyLTY5LjY4MXYtMTU0Ljk1N2wxNzItNjkuNjgxdjEwMi4xNmMwIDUuNTIzIDQuNDc4IDEwIDEwIDEwczEwLTQuNDc3IDEwLTEwdi0xMTYuODI5YzAtLjAyMiAwLS4wNDQgMC0uMDY2di0uMTA1YzAtMTEuMDI4IDguOTcyLTIwIDIwLTIwczIwIDguOTcyIDIwIDIwem00NC0xMjguMDc4LTI0IDcuODk5di04My42NDRsMjQgNy44OTl6Ii8+PC9nPjwvZz48L3N2Zz4=" />
                        <div className="name ml-3">
                            <h5 className="theme-text">Tools <span className="ml-2 badge badge-pill badge-theme">Bot</span></h5>
                            <p>Privacy and Help</p>
                        </div>
                        <div>
                            <span className="badge badge-pill badge-theme chat-alert"></span>
                        </div>
                    </div>
                    <div className="card-chat py-3">
                        <img src="https://i.imgur.com/QwZod6m.png" className="rounded-circle user-head-img direct" alt="User"></img>
                        <div className="name ml-3">
                            <h5>Maria Luisa</h5>
                            <p>You: Where is it?</p>
                        </div>
                        <div>
                            <span className="badge badge-pill badge-theme chat-alert"></span>
                        </div>
                    </div>
                    <div className="card-chat py-3">
                        <img src="https://i.imgur.com/rWYtZa6.png" className="rounded-circle user-head-img" alt="User"></img>
                        <div className="name ml-3">
                            <h5>John Bezos</h5>
                            <p>Some extra points 😀</p>
                        </div>
                        <div>
                            <span className="badge badge-pill badge-theme chat-alert">1</span>
                        </div>
                    </div>
                    <div className="card-chat py-3">
                        <img src="https://i.imgur.com/eX3hkoc.png" className="rounded-circle user-head-img direct" alt="User"></img>
                        <div className="name ml-3">
                            <h5>Kim Jisu</h5>
                            <p>Will you come?</p>
                        </div>
                        <div>
                            <span className="badge badge-pill badge-theme chat-alert">3</span>
                        </div>
                    </div>
                    <div className="card-chat py-3">
                        <img src="https://i.imgur.com/jONHmE5.png" className="rounded-circle user-head-img" alt="User"></img>
                        <div className="name ml-3">
                            <h5>Nana Wang</h5>
                            <p>Follow for follow?</p>
                        </div>
                        <div>
                            <span className="badge badge-pill badge-theme chat-alert">1</span>
                        </div>
                    </div>
                </main>
            </main>
        </div>
    );
}

export default Chat;