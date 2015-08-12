json.document do
	json.id @document.id
	json.name @document.name
	json.file @document.file
	json.signed @document.signed
	json.valid_user @valid_chilean
	json.signed_at @document.signed_at
	json.signs_pending @document.signs_pending?
	json.signs_pending_count @document.signs_pending
	json.participants @document.participants do |p|
	  	json.full_name p.user.full_name
	  	json.avatar p.user.avatar.url
	  	json.signed p.signed
	  	json.signed_at p.signed_at
	end
end