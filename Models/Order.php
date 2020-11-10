<?php


namespace models;


class Order
{
    private string $first_name;
    private string $last_name;
    private string $address;
    private string $email;

    private int $amount_of_bags;
    private int $total_price_of_bags;


    /**
     * @return string
     */
    public function getFirstName(): string
    {
        return $this->first_name;
    }

    /**
     * @return string
     */
    public function getLastName(): string
    {
        return $this->last_name;
    }

    /**
     * @return string
     */
    public function getAddress(): string
    {
        return $this->address;
    }

    /**
     * @return int
     */
    public function getAmountOfBags(): int
    {
        return $this->amount_of_bags;
    }

    /**
     * @return int
     */
    public function getTotalPriceOfBags(): int
    {
        return $this->total_price_of_bags;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }




}