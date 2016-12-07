// import chai from 'chai'
//
// describe('Array',
// 	describe('array first', () => {
// 		it('first', () => {
// 			expect(add(2, 3)).to.be.equal(5)
// 		})
// 	})
// )
// function add(a,b) {
// 	return a + b
// }

function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function test() {
  for (let i = 0; i < 10; i++) {
    await sleep(500);
    console.log(`i=${i}`);
  }
}

test().then(() => console.log('done'));
