let body: { name: string | number } | { firstName: string } = {
  name: 10,
};

let handleClick = <type>(value: type) => value;

handleClick<string>("10");
