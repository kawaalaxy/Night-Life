module.exports =
{
  name: 'edt',
  description: 'affiche emploi du temps',
  async execute(message, args, liste_nez)
  {
    if (args[0])
    {
      if (args[0] == "elec")
      {
        message.channel.send("https://www.cva.u-paris10.fr/edt/vue_etudiant_horizontale.php?current_year=2022&current_student=11243198&current_week=13&lar=260&hau=443")
      }
      else if(args[0] == "meca")
      {
        message.channel.send("https://www.cva.u-paris10.fr/edt/vue_etudiant_horizontale.php?current_year=2022&current_student=11243195&current_week=13&lar=260&hau=443")
      }
      else if(args[0] == "ener")
      {
        message.channel.send("https://www.cva.u-paris10.fr/edt/vue_etudiant_horizontale.php?current_year=2022&current_student=11243202&current_week=13&lar=260&hau=443")
      }
      else
      {
        message.channel.send("https://www.cva.u-paris10.fr/edt/vue_etudiant_horizontale.php?current_year=2022&current_student=11243198&current_week=13&lar=260&hau=443")
      }
    }
    else
    {
      message.channel.send("https://www.cva.u-paris10.fr/edt/vue_etudiant_horizontale.php?current_year=2022&current_student=11243198&current_week=13&lar=260&hau=443")
    }
  }
}
