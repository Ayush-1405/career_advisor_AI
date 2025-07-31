package com.advisor.entity;

public class CareerSuggestion {
    private String careerName;
    private String skills;
    private String averageSalary;
    private String demandLevel;

    // Constructor
    public CareerSuggestion(String careerName, String skills, String averageSalary, String demandLevel) {
        this.careerName = careerName;
        this.skills = skills;
        this.averageSalary = averageSalary;
        this.demandLevel = demandLevel;
    }

    // Getters & Setters
    public String getCareerName() { return careerName; }
    public void setCareerName(String careerName) { this.careerName = careerName; }

    public String getSkills() { return skills; }
    public void setSkills(String skills) { this.skills = skills; }

    public String getAverageSalary() { return averageSalary; }
    public void setAverageSalary(String averageSalary) { this.averageSalary = averageSalary; }

    public String getDemandLevel() { return demandLevel; }
    public void setDemandLevel(String demandLevel) { this.demandLevel = demandLevel; }
}
