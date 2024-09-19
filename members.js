function skillsmembers() {
  var members = [
    { name: "John", skills: ["JavaScript", "React", "Node"] },
    { name: "Jane", skills: ["JavaScript", "Angular", "Python"] }
  ];

  var skills = members.reduce(function(allSkills, member) {
    return [...allSkills, ...member.skills];
  }, []);

  return skills;
}