<?php
	// $firstName = $_POST['firstName'];
	// $lastName = $_POST['lastName'];
	// $gender = $_POST['gender'];
	// $email = $_POST['email'];
	// $password = $_POST['password'];
	// $number = $_POST['number'];

    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    
	// Database connection
	$conn = new mysqli('localhost','root','','pratik');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into hero (name,age,gender,email,mobile) values(?, ?, ?, ?, ?)");
		$stmt->bind_param("sissi", $name,$age,$gender,$email,$mobile);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>

