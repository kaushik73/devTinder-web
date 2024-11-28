const SideBarUser = ({ user, isSelected, onClick, lastIdx, isUserOnline }) => {
  const isUserOnlineClass = isUserOnline ? "online" : "";
  return (
    <>
      <div
        className={`px-4 py-2 flex items-center cursor-pointer ${
          isSelected ? "bg-pink-500" : "hover:bg-gray-700"
        }`}
        onClick={onClick}
      >
        <div className={`avatar ${isUserOnlineClass}`}>
          <div className="w-12 rounded-full">
            <img
              src={
                user.profileURL ||
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAAD5+fn29vbq6ur8/Pzw8PDBwcG1tbXOzs6rq6uEhITJycnm5ubz8/OSkpKfn59KSkrd3d01NTVtbW3V1dUYGBgjIyN4eHgrKyuZmZldXV1XV1c9PT27u7seHh4RERFlZWVlCv/zAAAKMklEQVR4nN1d2aKqIBTNWVNzLss0/f+fvApaoFgik/es19NRtsBm7ZHTSRwsy3biPLlqWvtKyri4WAJfJhSXMPAzDcfTNXXV49qBXpKrRsKjMFSPjRKpWxElGXCLCtXDo0EaP1dFGZA8bNVD3Ar9/F2UAd1/MjlN8vopi6bVrupxboDVkbf9Aq+H6qH+RLNRlAG+6sF+h11uF2WQ5sA62gp+b3wc0WEPUON8o5RF02LVg16B6VOL0uOsethEpN0eWbSrc8B9EyS7ZNG0rOvyyDnU3mnm7JgK7b3Oj8MIXBZRpikKVEsBoMccZOlRpaol6VXyg48svW3gqt47RsRLlh6RqVSWC09ZNC0PFcrCdV4GdOo2DndZemlUzY3Fbe8jKNVoAYuTTp5BjdV2FiKLpqmwqBtBsmiJfCXgiJKlX2iyt00hThZN8yTLUosUppPqYA/Xva9cIHNqLrtsZAokEoURcVjikMc4RR0wCEpZsph+1ooW5ipLmNPJjpiM/g1oG3nSnALB6kzeOhuQ7nUubUQilQUUd6HCZHJZgEBy1qOV64dmPjkzJ/0SN5C6aXolwCZLNRyM60dWLpc62yxTk43LyFxTJE/JVs1+t+y9evstLiX5BK5l2wE71fM9R4/ES0QMhGaOXGGMXevs7jd4UMaOSHNzlR2I2sGeqzi4zB9jd6RfyhbGpQtjXvM4CElGZEh6juyAp7d509zyyC1Ce03dkjw9sv1n4YZgeVKeg/Bi6N/NesJXke4MzL+J0d5zd7E/VmAu/116XH09JaNNSqrAXqdemDXdfK1iSiveWzxCeo4A8YToqch56/J6w5474u4ybU2AmHR4Z48dtEqfn1mJZDpDPmgqbxffnXPwSnrUyVmam/7O/Mt09ijJJsCJJIy7101sztS8ZOOsRzAXZj/VncVHX/ITnryZ/4wl6IVbR7X8QG2BCxOxJFzh/KziNsbNwIVhU0AOdmYpSBJM0aPuyhZZxfbfVUFOOiZMxxaHwPZfzmmANAhRYRg5OxZZVJGngQrD6k5B3SNPPsOjg40MoGLMHUWFUZJAYyADYF3miDCRknIu/TOANmJ81mfPZGpy6KyPMMzG1Fub3VTlnn6EYSZT0znTPlQlbiPCsCYjBaOhVyqr4QpzbjMzcjPGo5dlAOV7115Z2RQU5kntPeAEvPiHsVLJAnGnjs/I6DGLAzKOAxpn58bvfFfBrpk5iCu2BYKZzbFsB8A8EMGYjRhi7mZfMgdI4VujqITDSNjUUIqXd0p2AQCH6rNfD0bh+pl2ZzxnZv7ZRO7UgKSG0Ya5eI7H+HYoTOu7wWOgApnc8qCG72oAsR4/7bWIPqiCm9zsZs7CnFK/Gx27Pg9CQQfg5xLy/Ur5MyNMGHPQ+ZKzmoQJ0wwKIJHLAlBtxhWA10j2NQFdKsBXD4pxpeZonkYGUPM/28CMXyXTmRCYudxNXBgPlB2dsQHN5e58gJmsssuDoTXF3fcIY5u8n/oTkE1xTtiDaV+sPjh6QHOqHmwynX3rWGnj9Y8yXwK+0Ba4IDxUBZ4TR8wH9kD1yqAAR7HcDG0IzNJl/Jg2TJC6qbDMIND4EKNzBk03eampCQ4+ti4j/7CR1DXp1YAjPvUNjDoaEUadf1Yv/CdYbDXbc+AyS15ZF6jttZcOxTQZ2/c0B7d5q7pVw2kkNje2pOoQLNUjdKHx2dUZ4Mr+AWbmdB7WCJv/PhfmUaAF0GlMeYiGpoIrk5GzLhLIwNU2N5kA0htZmvoAGnM+SANUcErsb74GrEvJHtl1wHKrvVMDLfDjNKIDw9kbXAUVrLJLmb4AWrv7dGsM6OqRelGCr3vbQ95h0oz8POYvgJGvHYYA9PK8JJeY/cB530IbU4DluzC+Ajjv6RcadCTUR6CYKGD6a0V38o0ZM0faMBCw0ILKsxpqTAeUQMCtTLP8Yfj9mL1BPehiibeutADmZfuqkn++A+7mdhtj1BuYLlcegywvAVuetVvmxoihLMlR+OUSY7XV75UT+qPP7XlcYazR+ZX/OG+cj5/sEMYyEek0xPqbirJLpIrhuB21kYS6am396I/JRw1Eqg+7zjQUVUpQBEib6vh06HUGEmqy/JM87pq2MUlkGbaJ3EuRBKMnpDqobgbbujQ8JHKTRG7gFUXhOWcfyfbLQKNZuMUOyGZ6BLeRnRjR91YBL38UAMzhIdyyc1hgQmCTFS9abxt485tp6cG+QtLrmDcA1qCORNMqYrI49QNpo3EBC/N+GMfMG5A1f7Jo9TBYTE8WBSE2cjg18utlf2BMQMeiAbodulOK/evpu8s2GqPdcDD17MFDvabl86OtKTuT+Qsse1LG9J94bD51b45h1lzSd2uCHWW85lQfUbupckXQb/N3Je+uyOan2uweBypdG6YTd0hRMkkrmYF7fqMplh8fzQHQ8thRw25CN8rxjgCvxTa23Byt830l/oIkz5pX3PPIlTw/thPlz2XXicVZHi/abCzc/cuGL/dnGQWSOI7Z+M/6TmzTcp/9NCX8JsG/O7kzYJslXcxaYPALRfy8Xb+0a52Zy8SB4tP3pZVt+0oeIsI2ln4p4q+9mSBmcQDyb9ATZUNrwe4c/upctRmGHRauv7EJ6KyWl/gbLJ3c2/bg5yNITcZtpIeFE9E0mm3xCBjxNxUqDEXD5MR3vXRvjo7tNY+Ktp0xXkpPtNHQxiEwEkIjUH9WURMfI4jLPW3Z8UwNYlNXNEq2p4194scezYoL43xvg3mM/xoEdYYGpRcNp7bKkz+2eqjSMtnfLBt3HheLPtU16r+wt9zxSERbV1us7Yu/+w0AuC9z3h4LX4aLJm00uP7MHbCYL8ea3SHjYE3QZvVXHeu7vrJScodOOszC4C4y0bPidIP5XZmzfpoWbCsMYtazyUKq02fXF/Doyh+vKDbLobjdcx2z+LlXr/6Jy5Uc5GCQ1XBqXI7HAbHOZZjzhsSpd4B4NZLDq91/hs48TvEx/s/rTg5CsmvK7+oCVGXi2hHlbjq3i18WKVE27bWrX4Ak08+b/eUfptjQX466gnnBLd+Lvj57cn4sIj1dNphHW/GcWa/8nqwhq3jZcf8dw+R66wO+bThfXLT+jd5lyzHPy1Lu6EnN+wKGaTERFu+Y8mDQXfP8C2g3Ut4XfYwq4EJgFGPQI+C7FtpA2MRMi4nIVyBv5n0b34cIdJyfPO1IovJ9DitirrLZMSm0pQnFDKAsV8yVwXxjvIqDgMmO4n8xJrx0ZeUczvndw4sggxTN6Lg/uad/l3WD4oJ3reSEUIRigeg1/6ry9QWssomhibnmMw7X9b3O95CBABWJupjr8ap83Wx9cOOYKADl4MiXN4KLRbsAODGFfCYFWD2m/0echFy/rAi9MGGnehC8IIbLKIIQlqQKJ4E3MEvHX9r/2jvj6y9gKvn8E3hXF/0FMAavjoU/RGZ6YSwRloUicHTFq8dJVz0CjvhLykwTfMuvXIhwmSnDSfRF3zLxD9wJlEyh45P+AAAAAElFTkSuQmCC"
              }
            />
          </div>
        </div>

        <div className="ml-4">
          <p className="font-semibold">
            {user.fName} {user.lName}
          </p>
        </div>
      </div>
      {lastIdx && (
        <div className=" border border-b-1 border-slate-200 mt-6"></div>
      )}
    </>
  );
};

export default SideBarUser;
