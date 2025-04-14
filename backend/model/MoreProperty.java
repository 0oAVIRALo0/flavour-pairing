package com.example.mongodbapi.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "fdb_more_properties")  // Replace with the actual collection name
public class MoreProperty {

    @Id
    private String id;

    @Field("pubchem_id")
    private Integer pubchemId;

    @Field("number_of_atoms")
    private Integer numberOfAtoms;

    @Field("molecular_formula")
    private String molecularFormula;

    @Field("molecular_composition")
    private String molecularComposition;

    @Field("molecular_weight")
    private Double molecularWeight;

    @Field("molecular_mass")
    private Double molecularMass;

    @Field("energy")
    private Double energy;

    @Field("alogp")
    private Double alogp;

    @Field("logd")
    private Double logd;

    @Field("molecular_solubilty")
    private Double molecularSolubility;

    @Field("pka")
    private String pka;

    @Field("number_of_aromatic_bonds")
    private Integer numberOfAromaticBonds;

    @Field("number_of_aromatic_rings")
    private Integer numberOfAromaticRings;

    @Field("hba_count")
    private Integer hbaCount;

    @Field("hbd_count")
    private Integer hbdCount;

    @Field("number_of_h_acceptor")
    private Integer numberOfHAcceptor;

    @Field("number_of_h_acceptor_lipinski")
    private Integer numberOfHAcceptorLipinski;

    @Field("number_of_h_donor")
    private Integer numberOfHDonor;

    @Field("number_of_h_donor_lipinski")
    private Integer numberOfHDonorLipinski;

    @Field("numb_of_h_bonds")
    private Integer numberOfHBonds;

    @Field("num_rings")
    private Integer numRings;

    @Field("num_rotatablebonds")
    private Integer numRotatableBonds;

    @Field("surface_area")
    private Double surfaceArea;

    @Field("molecular_sasa")
    private Double molecularSasa;

    @Field("radius_of_gyration")
    private Double radiusOfGyration;

    @Field("molecular_3d_sasa")
    private Double molecular3dSasa;

    // Getters and Setters for all fields

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getPubchemId() {
        return pubchemId;
    }

    public void setPubchemId(Integer pubchemId) {
        this.pubchemId = pubchemId;
    }

    public Integer getNumberOfAtoms() {
        return numberOfAtoms;
    }

    public void setNumberOfAtoms(Integer numberOfAtoms) {
        this.numberOfAtoms = numberOfAtoms;
    }

    public String getMolecularFormula() {
        return molecularFormula;
    }

    public void setMolecularFormula(String molecularFormula) {
        this.molecularFormula = molecularFormula;
    }

    public String getMolecularComposition() {
        return molecularComposition;
    }

    public void setMolecularComposition(String molecularComposition) {
        this.molecularComposition = molecularComposition;
    }

    public Double getMolecularWeight() {
        return molecularWeight;
    }

    public void setMolecularWeight(Double molecularWeight) {
        this.molecularWeight = molecularWeight;
    }

    public Double getMolecularMass() {
        return molecularMass;
    }

    public void setMolecularMass(Double molecularMass) {
        this.molecularMass = molecularMass;
    }

    public Double getEnergy() {
        return energy;
    }

    public void setEnergy(Double energy) {
        this.energy = energy;
    }

    public Double getAlogp() {
        return alogp;
    }

    public void setAlogp(Double alogp) {
        this.alogp = alogp;
    }

    public Double getLogd() {
        return logd;
    }

    public void setLogd(Double logd) {
        this.logd = logd;
    }

    public Double getMolecularSolubility() {
        return molecularSolubility;
    }

    public void setMolecularSolubility(Double molecularSolubility) {
        this.molecularSolubility = molecularSolubility;
    }

    public String getPka() {
        return pka;
    }

    public void setPka(String pka) {
        this.pka = pka;
    }

    public Integer getNumberOfAromaticBonds() {
        return numberOfAromaticBonds;
    }

    public void setNumberOfAromaticBonds(Integer numberOfAromaticBonds) {
        this.numberOfAromaticBonds = numberOfAromaticBonds;
    }

    public Integer getNumberOfAromaticRings() {
        return numberOfAromaticRings;
    }

    public void setNumberOfAromaticRings(Integer numberOfAromaticRings) {
        this.numberOfAromaticRings = numberOfAromaticRings;
    }

    public Integer getHbaCount() {
        return hbaCount;
    }

    public void setHbaCount(Integer hbaCount) {
        this.hbaCount = hbaCount;
    }

    public Integer getHbdCount() {
        return hbdCount;
    }

    public void setHbdCount(Integer hbdCount) {
        this.hbdCount = hbdCount;
    }

    public Integer getNumberOfHAcceptor() {
        return numberOfHAcceptor;
    }

    public void setNumberOfHAcceptor(Integer numberOfHAcceptor) {
        this.numberOfHAcceptor = numberOfHAcceptor;
    }

    public Integer getNumberOfHAcceptorLipinski() {
        return numberOfHAcceptorLipinski;
    }

    public void setNumberOfHAcceptorLipinski(Integer numberOfHAcceptorLipinski) {
        this.numberOfHAcceptorLipinski = numberOfHAcceptorLipinski;
    }

    public Integer getNumberOfHDonor() {
        return numberOfHDonor;
    }

    public void setNumberOfHDonor(Integer numberOfHDonor) {
        this.numberOfHDonor = numberOfHDonor;
    }

    public Integer getNumberOfHDonorLipinski() {
        return numberOfHDonorLipinski;
    }

    public void setNumberOfHDonorLipinski(Integer numberOfHDonorLipinski) {
        this.numberOfHDonorLipinski = numberOfHDonorLipinski;
    }

    public Integer getNumberOfHBonds() {
        return numberOfHBonds;
    }

    public void setNumberOfHBonds(Integer numberOfHBonds) {
        this.numberOfHBonds = numberOfHBonds;
    }

    public Integer getNumRings() {
        return numRings;
    }

    public void setNumRings(Integer numRings) {
        this.numRings = numRings;
    }

    public Integer getNumRotatableBonds() {
        return numRotatableBonds;
    }

    public void setNumRotatableBonds(Integer numRotatableBonds) {
        this.numRotatableBonds = numRotatableBonds;
    }

    public Double getSurfaceArea() {
        return surfaceArea;
    }

    public void setSurfaceArea(Double surfaceArea) {
        this.surfaceArea = surfaceArea;
    }

    public Double getMolecularSasa() {
        return molecularSasa;
    }

    public void setMolecularSasa(Double molecularSasa) {
        this.molecularSasa = molecularSasa;
    }

    public Double getRadiusOfGyration() {
        return radiusOfGyration;
    }

    public void setRadiusOfGyration(Double radiusOfGyration) {
        this.radiusOfGyration = radiusOfGyration;
    }

    public Double getMolecular3dSasa() {
        return molecular3dSasa;
    }

    public void setMolecular3dSasa(Double molecular3dSasa) {
        this.molecular3dSasa = molecular3dSasa;
    }
}
