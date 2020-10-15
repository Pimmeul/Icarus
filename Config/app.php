<?php

/*
 *Start Date of the event in :Hour,Minute,Second,Month,Day,Year
*/
$start_date = mktime(0,0,0,5,23,2021);

/*
 *End Date of the event in :Hour,Minute,Second,Month,Day,Year
*/
$end_date = mktime(0,0,0,5,31,2021);

?>

<script type="text/javascript">
    export function getTimeStart() {
        return new Date(<?php echo $start_date ?> * 1000)
    }
    export function getTimeEnd() {
        return new Date(<?php echo $end_date ?> * 1000)
    }

</script>

