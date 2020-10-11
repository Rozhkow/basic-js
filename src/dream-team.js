module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) 
        return false;

let name = []
  for(i = 0; i < members.length; i++)
	if(typeof members[i] !== 'string') continue
    else	
	name.push(members[i].trim()[0].toUpperCase())
  return name.sort().join('');
};
