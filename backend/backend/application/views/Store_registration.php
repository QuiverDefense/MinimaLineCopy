<!DOCTYPE html>
<html>
<head>
<title>Store Registration form</title>
</head>

<body>
	<form method="post">
		<table width="600" align="center" border="1" cellspacing="5" cellpadding="5">
	
        <tr>
		<td colspan="2"><?php echo @$error; ?> Welcome to Store Registration!</td>
    </tr>	
  
    <tr>
    <td width="50">Store name </td>
    <td width="329"><input type="text" name="Store" /></td>
  </tr>
  
  <tr>
    <td>Manager</td>
    <td><input type="text" name="Manager"/></td>
  </tr>
  
  <tr>
    <td>Location </td>
    <td><input type="text" name="Location"/></td>
  </tr>

  <tr>
    <td>Store Logo </td>
    <td><input type="file" name="Logo"/></td>
  </tr>
  
  <tr>
    <td colspan="2" align="center">
	<input type="submit" name="register" value="Register Me"/></td>
  </tr>
</table>

	</form>
</body>
</html>