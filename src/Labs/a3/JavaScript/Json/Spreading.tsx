function Spreading() {
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5, 6];
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  const obj2 = {
    ...obj1,
    d: 4,
    e: 5,
    f: 6,
  };

  const obj3 = {
    ...obj1,
    b: 4,
  };

  return (
    <>
      <h2>Spread Operator</h2>
      <h3>Array Spread</h3>
      arr1 = {JSON.stringify(arr1)} <br />
      arr2 = {JSON.stringify(arr2)}
      <h3>Object Spread</h3>
      <pre>{JSON.stringify(obj1, null, 2)}</pre> <br />
      <pre>{JSON.stringify(obj2, null, 4)}</pre> <br />
      {JSON.stringify(obj3, null, 6)} <br />
    </>
  );
}

export default Spreading;
