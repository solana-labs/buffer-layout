import * as lo from '../lib/Layout';
import assert from "assert";

suite('Typed Examples', () => {
    test('Structure round-trip', () => {
        interface TestInterface {
            numProp: number,
            cstrProp: string,
            strProp: string,
            arrProp: number[],
        }
        const layout = lo.struct([
            lo.u16('numProp'),
            lo.u16(),
            lo.seq(lo.u16(), lo.offset(lo.u16(), -2), 'arrProp'),
            lo.cstr('cstrProp'),
            lo.utf8('strProp'),
        ])
        const o: TestInterface = {
            numProp: 3,
            strProp: 'hello',
            cstrProp: 'world',
            arrProp: [64],
        }
        const buf = Buffer.alloc(17);
        layout.encode(o, buf);
        const encoded = '0300 0100 4000 776f726c6400 68656c6c6f'.replace(/ /g, '')
        assert.strictEqual(buf.toString('hex'), encoded)
        const o2 = layout.decode(buf, 0)
        assert.deepStrictEqual(o, o2)
    })
})
