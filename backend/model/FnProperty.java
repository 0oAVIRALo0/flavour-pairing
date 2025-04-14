package com.example.mongodbapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "fdb_fn_properties")  // MongoDB collection name
public class FnProperty {

    @Id
    private String id;

    @Field("Name")
    private String name;

    @Field("Botanical_name")
    private String botanicalName;

    @Field("Botanical_family")
    private String botanicalFamily;

    @Field("Synonyms")
    private String synonyms;

    @Field("CAS_No")
    private String casNo;

    @Field("FL_No")
    private String flNo;

    @Field("FEMA_No")
    private Double femaNo;

    @Field("NAS_No")
    private String nasNo;

    @Field("CoE_No")
    private String coeNo;

    @Field("CoE")
    private String coeApproval;

    @Field("EINECS_No")
    private String einecsNo;

    @Field("FDA")
    private String fda;

    @Field("FEMA_Gras")
    private String femaGras;

    @Field("JECFA_No")
    private String jecfaNo;

    @Field("JECFA_Status")
    private String jecfaStatus;

    @Field("Additives")
    private String additives;

    @Field("IFRA_Category")
    private String ifraCategory;

    @Field("REACH_No")
    private String reachNo;

    @Field("ScentRefLibrary")
    private String scentRefLibrary;

    @Field("FCT")
    private String fct;

    @Field("Notes")
    private String notes;

    @Field("Derivatives")
    private String derivatives;

    @Field("Derivative_names")
    private String derivativeNames;

    @Field("NOTE")
    private String note;

    @Field("Foreign_names")
    private String foreignNames;

    @Field("Essential_oil_composition")
    private String essentialOilComposition;

    @Field("Genus_Species")
    private String genusSpecies;

    @Field("Composition")
    private String composition;

    @Field("INS_No")
    private String insNo;

    @Field("Animal_family")
    private String animalFamily;

    @Field("Physical_chemical_characteristics")
    private String physicalChemicalCharacteristics;

    @Field("Natural_occurrence")
    private String naturalOccurrence;

    @Field("Trade_association_guidelines")
    private String tradeAssociationGuidelines;

    @Field("Aroma_threshold_values")
    private String aromaThresholdValues;

    @Field("Description")
    private String description;

    @Field("IOFI")
    private String iofiCategorisation;

    @Field("Synthesis")  // Match MongoDB field name exactly
    private String synthesis;

    public String getSynthesis() {
        return synthesis;
    }

    public void setSynthesis(String synthesis) {
        this.synthesis = synthesis;
    }
    // // New field for FoodCategory
    // @Field("Food_Category")
    // private String foodCategory;

    // // Getters and setters for the new field
    // public String getFoodCategory() {
    //     return foodCategory;
    // }

    // public void setFoodCategory(String foodCategory) {
    //     this.foodCategory = foodCategory;
    // }

    // Getters and Setters for all other fields (no changes here)
    public String getDescription() {
        return description;
    }

    public String getIofiCategorisation() {
        return iofiCategorisation;
    }

    public void setIofiCategorisation(String iofiCategorisation) {
        this.iofiCategorisation = iofiCategorisation;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCoeApproval() {
        return coeApproval;
    }

    public void setCoeApproval(String coeApproval) {
        this.coeApproval = coeApproval;
    }

    public String getTradeAssociationGuidelines() {
        return tradeAssociationGuidelines;
    }

    public String getAromaThresholdValues() {
        return aromaThresholdValues;
    }

    public void setAromaThresholdValues(String aromaThresholdValues) {
        this.aromaThresholdValues = aromaThresholdValues;
    }

    public void setTradeAssociationGuidelines(String tradeAssociationGuidelines) {
        this.tradeAssociationGuidelines = tradeAssociationGuidelines;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNaturalOccurrence() {
        return naturalOccurrence;
    }

    public void setNaturalOccurrence(String naturalOccurrence) {
        this.naturalOccurrence = naturalOccurrence;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBotanicalName() {
        return botanicalName;
    }

    public void setBotanicalName(String botanicalName) {
        this.botanicalName = botanicalName;
    }

    public String getBotanicalFamily() {
        return botanicalFamily;
    }

    public void setBotanicalFamily(String botanicalFamily) {
        this.botanicalFamily = botanicalFamily;
    }

    public String getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(String synonyms) {
        this.synonyms = synonyms;
    }

    public String getCasNo() {
        return casNo;
    }

    public void setCasNo(String casNo) {
        this.casNo = casNo;
    }

    public String getFlNo() {
        return flNo;
    }

    public void setFlNo(String flNo) {
        this.flNo = flNo;
    }

    public Double getFemaNo() {
        return femaNo;
    }

    public void setFemaNo(Double femaNo) {
        this.femaNo = femaNo;
    }

    public String getNasNo() {
        return nasNo;
    }

    public void setNasNo(String nasNo) {
        this.nasNo = nasNo;
    }

    public String getCoeNo() {
        return coeNo;
    }

    public void setCoeNo(String coeNo) {
        this.coeNo = coeNo;
    }

    public String getEinecsNo() {
        return einecsNo;
    }

    public void setEinecsNo(String einecsNo) {
        this.einecsNo = einecsNo;
    }

    public String getFda() {
        return fda;
    }

    public void setFda(String fda) {
        this.fda = fda;
    }

    public String getFemaGras() {
        return femaGras;
    }

    public void setFemaGras(String femaGras) {
        this.femaGras = femaGras;
    }

    public String getJecfaNo() {
        return jecfaNo;
    }

    public void setJecfaNo(String jecfaNo) {
        this.jecfaNo = jecfaNo;
    }

    public String getJecfaStatus() {
        return jecfaStatus;
    }

    public void setJecfaStatus(String jecfaStatus) {
        this.jecfaStatus = jecfaStatus;
    }

    public String getAdditives() {
        return additives;
    }

    public void setAdditives(String additives) {
        this.additives = additives;
    }

    public String getIfraCategory() {
        return ifraCategory;
    }

    public void setIfraCategory(String ifraCategory) {
        this.ifraCategory = ifraCategory;
    }

    public String getReachNo() {
        return reachNo;
    }

    public void setReachNo(String reachNo) {
        this.reachNo = reachNo;
    }

    public String getScentRefLibrary() {
        return scentRefLibrary;
    }

    public void setScentRefLibrary(String scentRefLibrary) {
        this.scentRefLibrary = scentRefLibrary;
    }

    public String getFct() {
        return fct;
    }

    public void setFct(String fct) {
        this.fct = fct;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getDerivatives() {
        return derivatives;
    }

    public void setDerivatives(String derivatives) {
        this.derivatives = derivatives;
    }

    public String getDerivativeNames() {
        return derivativeNames;
    }

    public void setDerivativeNames(String derivativeNames) {
        this.derivativeNames = derivativeNames;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getForeignNames() {
        return foreignNames;
    }

    public void setForeignNames(String foreignNames) {
        this.foreignNames = foreignNames;
    }

    public String getEssentialOilComposition() {
        return essentialOilComposition;
    }

    public void setEssentialOilComposition(String essentialOilComposition) {
        this.essentialOilComposition = essentialOilComposition;
    }

    public String getGenusSpecies() {
        return genusSpecies;
    }

    public void setGenusSpecies(String genusSpecies) {
        this.genusSpecies = genusSpecies;
    }

    public String getComposition() {
        return composition;
    }

    public void setComposition(String composition) {
        this.composition = composition;
    }

    public String getInsNo() {
        return insNo;
    }

    public void setInsNo(String insNo) {
        this.insNo = insNo;
    }

    public String getAnimalFamily() {
        return animalFamily;
    }

    public void setAnimalFamily(String animalFamily) {
        this.animalFamily = animalFamily;
    }

    public String getPhysicalChemicalCharacteristics() {
        return physicalChemicalCharacteristics;
    }

    public void setPhysicalChemicalCharacteristics(String physicalChemicalCharacteristics) {
        this.physicalChemicalCharacteristics = physicalChemicalCharacteristics;
    }

}
