module.exports =
{
  name: 'test1',
  description: 'test',
  async execute(message, args, test_1)
  {
    if (test_1)
    {
      console.log("test : ok");
      test_1 = 0;
      return 1;
    }
    else
    {
      console.log("test : not ok");
    }
  }
}
