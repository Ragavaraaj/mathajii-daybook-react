<?php
 
include_once ('connection.php');

try 
{
	if ($_SERVER['REQUEST_METHOD'] == 'POST') 
	{ 
		$inUser = "user6";
		$database = new Connection();
		$con = $database->openConnection();
	
		$stmt = $con->query("select date, info, debit, credit, balance from " . $inUser .  " where view % 2 = 0 order by id desc limit 100");
		while($row = $stmt->fetch()){
			$date = date_create($row["date"]);
			$row["date"] = date_format($date,"d-M-y");
			switch($row["view"])
			{
				case 2:
				case 4:
				case 6:
					$row["debit"] = number_format(0,2);
				break;

				case 8:
					$row["credit"] = number_format(0,2);
				break;
			}
			$data1[] = $row;
		}

		echo json_encode($data1);
		$database->closeConnection();
	}
}
 
catch (PDOException $e)
{
    echo "There is some problem in connection: " . $e->getMessage();
 
}
 
?>
