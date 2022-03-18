namespace TestApi.GraphQL.Users{

    public record AddUserInput(string Name, string Password);
    public record EditUserInput(int Id, string Name, string Password);
    public record DeleteUserInput(int Id);
    
}