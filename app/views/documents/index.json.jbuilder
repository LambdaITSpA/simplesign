json.documents @documents do |d|
  json.id d.id
  json.name d.name
  json.file d.file.url
  json.signed d.signed
  json.signed_at d.signed_at
  json.signs_pending d.signs_pending?
  json.signs_pending_count d.signs_pending
  json.participants d.participants do |p|
  	json.full_name p.user.full_name
  	json.avatar p.user.avatar.url
  	json.signed p.signed
  	json.signed_at p.signed_at
  end
end