// Enhanced script with Luna character interactions while preserving all original functionality

let currentUser = 1;

// Luna Character Interactions
const lunaMessages = [
    "Hello! I'm Luna, your sleep guide! 🌙",
    "Did you know your heart rate drops during sleep? ❤️",
    "Sleep is when your body repairs itself! ✨",
    "Melatonin helps you feel sleepy! 💤",
    "Good sleep makes everything better! 🌟",
    "Sweet dreams are made of good sleep hygiene! 💫",
    "I love watching over sleepy data! 🌙✨"
];

let lunaMessageIndex = 0;

function interactWithLuna() {
    const lunaCharacter = document.querySelector('.luna-character');
    const lunaSpeech = document.getElementById('luna-speech');
    const lunaEyes = document.querySelectorAll('.luna-eye');
    const lunaMouth = document.getElementById('luna-mouth');
    
    // Make Luna happy
    lunaEyes.forEach(eye => {
        eye.classList.remove('sleepy');
    });
    lunaMouth.classList.add('happy');
    
    // Show speech bubble with cycling messages
    lunaSpeech.textContent = lunaMessages[lunaMessageIndex];
    lunaSpeech.classList.add('show');
    
    // Cycle through messages
    lunaMessageIndex = (lunaMessageIndex + 1) % lunaMessages.length;
    
    // Hide speech bubble after 3 seconds
    setTimeout(() => {
        lunaSpeech.classList.remove('show');
        lunaMouth.classList.remove('happy');
    }, 3000);
    
    // Add some sparkle effect
    createLunaSparkles();
}

function createLunaSparkles() {
    const lunaContainer = document.querySelector('.luna-container');
    const sparkleCount = 8;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '16px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '5';
        
        // Random position around Luna
        const angle = (i / sparkleCount) * 2 * Math.PI;
        const radius = 80 + Math.random() * 40;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        sparkle.style.left = `${70 + x}px`;
        sparkle.style.top = `${70 + y}px`;
        sparkle.style.opacity = '0';
        sparkle.style.transition = 'all 1s ease-out';
        
        lunaContainer.appendChild(sparkle);
        
        // Animate sparkle
        setTimeout(() => {
            sparkle.style.opacity = '1';
            sparkle.style.transform = `scale(1.5) rotate(${Math.random() * 360}deg)`;
        }, i * 100);
        
        // Remove sparkle
        setTimeout(() => {
            sparkle.style.opacity = '0';
            sparkle.style.transform = `scale(0) rotate(${Math.random() * 360}deg)`;
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1000);
        }, 1000 + i * 100);
    }
}

function toggleSleepyMoon() {
    const leftEye = document.getElementById('left-eye');
    const rightEye = document.getElementById('right-eye');
    
    // Toggle sleepy state
    leftEye.classList.toggle('sleepy');
    rightEye.classList.toggle('sleepy');
    
    // Add a little bounce effect
    const lunaChar = document.querySelector('.luna-character');
    lunaChar.style.animation = 'none';
    setTimeout(() => {
        lunaChar.style.animation = 'luna-float 8s ease-in-out infinite';
    }, 100);
}

// Auto-toggle sleepy state occasionally
setInterval(() => {
    if (Math.random() < 0.3) { // 30% chance every 8 seconds
        toggleSleepyMoon();
    }
}, 8000);

// Mini Luna interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to mini Luna moons
    setTimeout(() => {
        const miniLunas = document.querySelectorAll('.luna-mini');
        miniLunas.forEach(mini => {
            mini.addEventListener('click', function() {
                createMiniSparkle(this);
                showMiniMessage();
            });
        });
    }, 1000);
});

function createMiniSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '15';
    sparkle.style.left = '50%';
    sparkle.style.top = '50%';
    sparkle.style.transform = 'translate(-50%, -50%)';
    sparkle.style.opacity = '0';
    sparkle.style.transition = 'all 0.8s ease-out';
    
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.style.opacity = '1';
        sparkle.style.transform = 'translate(-50%, -50%) scale(2) rotate(360deg)';
    }, 10);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 800);
}

function showMiniMessage() {
    const messages = ["Keep exploring! 🌙", "Luna approves! ✨", "Sweet data! 💫"];
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    // Create temporary message
    const msgElement = document.createElement('div');
    msgElement.textContent = message;
    msgElement.style.position = 'fixed';
    msgElement.style.top = '20px';
    msgElement.style.right = '20px';
    msgElement.style.background = 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.95))';
    msgElement.style.color = '#f1f5f9';
    msgElement.style.padding = '10px 15px';
    msgElement.style.borderRadius = '10px';
    msgElement.style.fontSize = '14px';
    msgElement.style.zIndex = '10001';
    msgElement.style.border = '1px solid rgba(251, 191, 36, 0.3)';
    msgElement.style.backdropFilter = 'blur(10px)';
    msgElement.style.opacity = '0';
    msgElement.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(msgElement);
    
    setTimeout(() => {
        msgElement.style.opacity = '1';
        msgElement.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => {
        msgElement.style.opacity = '0';
        msgElement.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (msgElement.parentNode) {
                msgElement.parentNode.removeChild(msgElement);
            }
        }, 300);
    }, 2000);
}

// Enhanced toggle button functionality
document.getElementById("toggleUserView").addEventListener("click", function() {
    const userSection = document.getElementById("userSpecificSection");
    const button = this;
    const icon = button.querySelector('.icon');
    
    if (userSection.style.display === "none" || userSection.style.display === "") {
        // Show user-specific section with animation
        userSection.style.display = "block";
        button.innerHTML = `<span class="button-text">🔒 Hide Individual Data</span><span class="icon">▲</span>`;
        button.classList.add('expanded');
        
        // Add a subtle animation
        button.style.animation = 'pulse-glow 0.6s ease-in-out';
        setTimeout(() => {
            button.style.animation = '';
        }, 600);
        
        // Show Luna's approval
        setTimeout(() => {
            interactWithLuna();
        }, 500);
        
    } else {
        // Hide user-specific section
        userSection.style.display = "none";
        button.innerHTML = `<span class="button-text">🔍 Explore Individual Data</span><span class="icon">▼</span>`;
        button.classList.remove('expanded');
    }
});

// Add shake keyframe animation if it doesn't exist
if (!document.querySelector('#shake-animation')) {
    const style = document.createElement('style');
    style.id = 'shake-animation';
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
}

// ============= ORIGINAL FUNCTIONALITY PRESERVED BELOW =============

// Your actual data loading code
const userIDs = Array.from({ length: 21 }, (_, i) => i + 1).filter(user => user !== 11 && user !== 21);

Promise.all(
    userIDs.map(userNum => 
        d3.csv(`data/DataPaper/user_${userNum}/saliva.csv`).catch(() => null)
    )
).then(allUsersSalivaData => {
    const validSalivaData = allUsersSalivaData.filter(d => d);
    const aggregatedData = { "before sleep": [], "wake up": [] };

    validSalivaData.forEach(userData => {
        userData.forEach(row => {
            aggregatedData[row.SAMPLES].push({
                cortisol: +row["Cortisol NORM"],
                melatonin: +row["Melatonin NORM"]
            });
        });
    });

    const avgCortisolBeforeSleep = d3.mean(aggregatedData["before sleep"], d => d.cortisol);
    const avgCortisolWakeUp = d3.mean(aggregatedData["wake up"], d => d.cortisol);
    const avgMelatoninBeforeSleep = d3.mean(aggregatedData["before sleep"], d => d.melatonin);
    const avgMelatoninWakeUp = d3.mean(aggregatedData["wake up"], d => d.melatonin);

    // ✅ Render the chart AFTER data is loaded and processed
    renderCortisolMelatoninChart(avgCortisolBeforeSleep, avgCortisolWakeUp, avgMelatoninBeforeSleep, avgMelatoninWakeUp);
});

function renderCortisolMelatoninChart(avgCortisolBeforeSleep, avgCortisolWakeUp, avgMelatoninBeforeSleep, avgMelatoninWakeUp) {
    d3.select("#cortisolMelatoninChart svg").remove();

    const margin = { top: 80, right: 80, bottom: 80, left: 80 };
    const width = 700;
    const height = 500;
    
    const svg = d3.select("#cortisolMelatoninChart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Add meaningful title
    svg.append("text")
        .attr("class", "chart-title")
        .attr("x", width / 2)
        .attr("y", 20)
        .attr("font-size", "24px")
        .attr("font-weight", "bold")
        .text("Cortisol & Melatonin Levels: Before Sleep vs Wake Up");

    // Define log scales for cortisol & melatonin
    const logScaleCortisol = d3.scaleLog()
        .domain([Math.min(avgCortisolBeforeSleep, avgCortisolWakeUp), Math.max(avgCortisolBeforeSleep, avgCortisolWakeUp)])
        .range([1, 100]);

    const logScaleMelatonin = d3.scaleLog()
        .domain([Math.min(avgMelatoninBeforeSleep, avgMelatoninWakeUp), Math.max(avgMelatoninBeforeSleep, avgMelatoninWakeUp)])
        .range([1, 100]);

    const data = [
        { 
            label: "Before Sleep", 
            cortisol: logScaleCortisol(avgCortisolBeforeSleep), 
            melatonin: logScaleMelatonin(avgMelatoninBeforeSleep),
            originalCortisol: avgCortisolBeforeSleep,
            originalMelatonin: avgMelatoninBeforeSleep
        },
        { 
            label: "Wake Up", 
            cortisol: logScaleCortisol(avgCortisolWakeUp), 
            melatonin: logScaleMelatonin(avgMelatoninWakeUp),
            originalCortisol: avgCortisolWakeUp,
            originalMelatonin: avgMelatoninWakeUp
        }
    ];

    const xScale = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([60, width - 60])
        .padding(0.3);

    const yScaleCortisol = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.cortisol) * 1.1])
        .nice()
        .range([height - 60, 60]);

    const yScaleMelatonin = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.melatonin) * 1.1])
        .nice()
        .range([height - 60, 60]);

    // Meaningful colors
    const cortisolColor = "#e74c3c"; // Red for cortisol (stress hormone)
    const melatoninColor = "#3498db"; // Blue for melatonin (sleep hormone)

    const tooltip_mel = d3.select("#tooltip_mel");

    // Add melatonin bars (shifted slightly for readability)
    svg.selectAll(".bar-melatonin")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar-melatonin")
        .attr("x", d => xScale(d.label) + xScale.bandwidth() / 2)
        .attr("y", d => yScaleMelatonin(d.melatonin))
        .attr("width", xScale.bandwidth() / 2)
        .attr("height", d => height - 60 - yScaleMelatonin(d.melatonin))
        .attr("fill", melatoninColor)
        .on("mouseover", function(event, d) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // ✅ Use tooltip_mel instead of tooltip
            tooltip_mel.transition().duration(200).style("opacity", 1);
            tooltip_mel.html(`
                <div class="tooltip_mel-title">Melatonin</div>
                <div class="tooltip_mel-metric">
                    <span class="tooltip_mel-label">${d.label}:</span>
                    <span class="tooltip_mel-value">${d.originalMelatonin.toFixed(2)} pg/mL</span>
                </div>
            `)
            .style("left", () => {
                const tooltip = document.getElementById("tooltip_mel");
                const left = Math.max(
                    10, // ✅ Ensures tooltip stays at least 10px from the left edge
                    Math.min(
                        window.innerWidth - tooltip.offsetWidth - 10, // ✅ Prevents right-side overflow
                        mouseX - tooltip.offsetWidth / 2 // ✅ Centers tooltip over cursor
                    )
                );
                return `${left}px`;
            })
            .style("top", () => {
                const tooltip = document.getElementById("tooltip_mel");
                return `${Math.max(
                    10, // ✅ Ensures it doesn't go off the top edge
                    mouseY + 20 // ✅ Positions below cursor instead of above
                )}px`;
            })
            
        })
        .on("mouseout", function() {
            // ✅ Use tooltip_mel instead of tooltip
            tooltip_mel.transition().duration(200).style("opacity", 0);
        });

        // Add cortisol bars
    svg.selectAll(".bar-cortisol")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar-cortisol")
        .attr("x", d => xScale(d.label))
        .attr("y", d => yScaleCortisol(d.cortisol))
        .attr("width", xScale.bandwidth() / 2)
        .attr("height", d => height - 60 - yScaleCortisol(d.cortisol))
        .attr("fill", cortisolColor)
        .on("mouseover", function(event, d) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            tooltip_mel.transition().duration(200).style("opacity", 1);
            tooltip_mel.html(`
                <div class="tooltip_mel-title">Cortisol</div>
                <div class="tooltip_mel-metric">
                    <span class="tooltip_mel-label">${d.label}:</span>
                    <span class="tooltip_mel-value">${d.originalCortisol.toFixed(2)} ng/mL</span>
                </div>
            `)
            .style("left", () => {
                const tooltip = document.getElementById("tooltip_mel");
                const left = Math.max(
                    10, // ✅ Ensures tooltip stays at least 10px from the left edge
                    Math.min(
                        window.innerWidth - tooltip.offsetWidth - 10, // ✅ Prevents right-side overflow
                        mouseX - tooltip.offsetWidth / 2 // ✅ Centers tooltip over cursor
                    )
                );
                return `${left}px`;
            })
            .style("top", () => {
                const tooltip = document.getElementById("tooltip_mel");
                return `${Math.max(
                    10, // ✅ Ensures it doesn't go off the top edge
                    mouseY + 20 // ✅ Positions below cursor instead of above
                )}px`;
            })
        })
        .on("mouseout", function() {
            tooltip_mel.transition().duration(200).style("opacity", 0);
        });


    // Add X-axis
    svg.append("g")
        .attr("transform", `translate(0,${height - 60})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text")
        .style("font-weight", "bold")
        .attr("class", "x-axis-label");

    // Add Y-axis for Cortisol (left)
    svg.append("g")
        .attr("transform", "translate(60,0)")
        .call(d3.axisLeft(yScaleCortisol));

    // Add Y-axis for Melatonin (right)
    svg.append("g")
        .attr("transform", `translate(${width - 60},0)`)
        .call(d3.axisRight(yScaleMelatonin));

    // Add Y-axis labels
    svg.append("text")
        .attr("class", "axis-title")
        .attr("transform", "rotate(-90)")
        .attr("y", 20)
        .attr("x", -height / 2)
        .style("text-anchor", "middle")
        .text("Cortisol (ng/mL)");

    svg.append("text")
        .attr("class", "axis-title")
        .attr("transform", "rotate(90)")
        .attr("y", -width + 20)
        .attr("x", height / 2)
        .style("text-anchor", "middle")
        .text("Melatonin (pg/mL)");

    // Add legend
    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width - margin.right - 100}, 80)`);

    // Cortisol legend
    legend.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", cortisolColor);

    legend.append("text")
        .attr("class", "legend-cortisol")
        .attr("x", 20)
        .attr("y", 12)
        .style("font-weight", "bold")
        .text("Cortisol");

    // Melatonin legend
    legend.append("rect")
        .attr("x", 0)
        .attr("y", 25)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", melatoninColor);

    legend.append("text")
        .attr("class", "legend-melatonin")
        .attr("x", 20)
        .attr("y", 37)
        .style("font-weight", "bold")
        .text("Melatonin");
}


// Function to aggregate heart rate data across all users for density plot
async function aggregateHeartRateData() {
    const sleepHRValues = [];
    const awakeHRValues = [];
    
    // Load data for all users (adjust numUsers based on your dataset)
    const numUsers = 21;
    
    for (let userNum = 1; userNum <= numUsers; userNum++) {
        if (userNum === 11) continue;
        try {
            const [sleepData, hrData] = await Promise.all([
                d3.csv(`data/MergedUserData/merged_user_${userNum}.csv`),
                d3.csv(`data/DataPaper/user_${userNum}/Actigraph.csv`)
            ]);
            
            
            if (sleepData.length > 0 && hrData.length > 0) {
                const sleepInfo = sleepData[0];
                
                // Parse sleep times
                const inBedTime = parseTime(sleepInfo['In Bed Time']);
                const outBedTime = parseTime(sleepInfo['Out Bed Time']);
                
                hrData.forEach(record => {
                    const hr = parseFloat(record.HR);
                    if (isNaN(hr) || hr <= 0 || hr > 200) return; // Skip invalid HR readings
                    
                    const recordTime = parseTime(record.time);
                    
                    // Determine if this reading is during sleep or awake period
                    const isSleeping = isInSleepPeriod(recordTime, inBedTime, outBedTime);
                    
                    if (isSleeping) {
                        sleepHRValues.push(hr);
                    } else {
                        awakeHRValues.push(hr);
                    }
                });
                
            }
        } catch (error) {
            console.log(`✗ User ${userNum} data not available:`, error.message);
        }
    }
    
    
    if (sleepHRValues.length === 0 && awakeHRValues.length === 0) {
        console.error("No HR data loaded! Check file paths and data availability.");
        return { sleepHR: [], awakeHR: [] };
    }
    
    return {
        sleepHR: sleepHRValues,
        awakeHR: awakeHRValues
    };
}

// Function to calculate kernel density estimation
function kernelDensityEstimator(kernel, X) {
    return function(V) {
        return X.map(function(x) {
            return [x, d3.mean(V, function(v) { return kernel(x - v); })];
        });
    };
}

// Epanechnikov kernel
function kernelEpanechnikov(k) {
    return function(v) {
        return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
    };
}

// Function to render the density plot
function renderDensityPlot(hrData) {
    setTimeout(() => {
        const loadingMessage = document.getElementById("loadingMessage");
        if (loadingMessage) loadingMessage.style.display = "none";  // ✅ Hide message
    }, 3000);
    
    const { sleepHR, awakeHR } = hrData;
    
    if (sleepHR.length === 0 && awakeHR.length === 0) {
        console.error("No data to plot");
        return;
    }
    
    const margin = { top: 20, right: 80, bottom: 90, left: 80 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    // Clear previous graph
    d3.select("#dual-line-chart").selectAll("*").remove();

    // Initialize tooltip properly
    const tooltip_density = d3.select("#tooltip_density")
        .style("opacity", 0)
        .style("background", "rgba(0, 0, 0, 0.95)")
        .html("")
        .style("left", "0px") // Reset position
        .style("top", "0px");
    
    const svg = d3.select("#dual-line-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    
    svg.append("text")
        .attr("class", "chart-title-HR")
        .attr("x", width / 2 + 50)
        .attr("y", 20)
        .text("Average Heart Rate: Sleep vs. Awake Periods");
    
        const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top + 40})`);
    
    // Determine HR range for both datasets
    const allHR = [...sleepHR, ...awakeHR];
    const hrExtent = d3.extent(allHR);
    const hrRange = d3.range(hrExtent[0], hrExtent[1] + 1, 1); // 1 BPM intervals
    
    // Calculate density curves
    const bandwidth = 8; // Adjust for smoother/rougher curves
    const kde = kernelDensityEstimator(kernelEpanechnikov(bandwidth), hrRange);
    
    let sleepDensity = [];
    let awakeDensity = [];
    
    if (sleepHR.length > 0) {
        sleepDensity = kde(sleepHR);
    }
    
    if (awakeHR.length > 0) {
        awakeDensity = kde(awakeHR);
    }
    
    // Scales
    const xScale = d3.scaleLinear()
        .domain(hrExtent)
        .range([0, width]);
    
    const maxDensity = Math.max(
        sleepDensity.length > 0 ? d3.max(sleepDensity, d => d[1]) : 0,
        awakeDensity.length > 0 ? d3.max(awakeDensity, d => d[1]) : 0
    );
    
    const yScale = d3.scaleLinear()
        .domain([0, maxDensity * 1.1])
        .range([height, 0]);
    
    // Add axes
    g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale))
        .append("text")
        .attr("x", width / 2)
        .attr("y", 40)
        .attr("fill", "black")
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", 12)
        .text("Heart Rate (BPM)");
    
    g.append("g")
        .call(d3.axisLeft(yScale))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -60)
        .attr("x", -height / 2)
        .attr("fill", "black")
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", 12)
        .text("Density");
    
    // Line generator
    const line = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))
        .curve(d3.curveCardinal);
    
    // Area generator for shading
    const area = d3.area()
        .x(d => xScale(d[0]))
        .y0(height)
        .y1(d => yScale(d[1]))
        .curve(d3.curveCardinal);
    

    // Add sleep density curve (blue)
    if (sleepDensity.length > 0) {
        // Add filled area for sleep
        g.append("path")
            .datum(sleepDensity)
            .attr("fill", "#4A90E2")
            .attr("fill-opacity", 0.3)
            .attr("d", area);
        
        // Add sleep curve line with hover
        g.append("path")
            .datum(sleepDensity)
            .attr("fill", "none")
            .attr("stroke", "#4A90E2")
            .attr("stroke-width", 3)
            .attr("d", line)
            .style("cursor", "crosshair")
            .on("mouseover", function(event, d) {
                const tooltip_density = d3.select("#tooltip_density");
                d3.select(this).attr("stroke-width", 5);
            })
            .on("mousemove", function(event, d) {
                const [mouseX, mouseY] = d3.pointer(event);
                const hrValue = Math.round(xScale.invert(mouseX));
                
                // Find closest point on sleep curve
                const sleepPoint = sleepDensity.reduce((prev, curr) => 
                    Math.abs(curr[0] - hrValue) < Math.abs(prev[0] - hrValue) ? curr : prev
                );
                
                // Find corresponding awake density value
                let awakeDensityVal = 0;
                if (awakeDensity.length > 0) {
                    const awakePoint = awakeDensity.find(d => Math.round(d[0]) === Math.round(sleepPoint[0]));
                    awakeDensityVal = awakePoint ? awakePoint[1] : 0;
                }
                
                // Calculate percentages
                const sleepCount = sleepHR.filter(hr => Math.abs(hr - sleepPoint[0]) <= 2).length;
                const awakeCount = awakeHR.filter(hr => Math.abs(hr - sleepPoint[0]) <= 2).length;
                const sleepPercent = sleepHR.length > 0 ? (sleepCount / sleepHR.length * 100).toFixed(1) : 0;
                const awakePercent = awakeHR.length > 0 ? (awakeCount / awakeHR.length * 100).toFixed(1) : 0;
                
                tooltip_density.transition()
                    .duration(100)
                    .style("opacity", .9);
                
                tooltip_density.html(`
                    <strong>💤 Sleep Curve</strong><br/>
                    <strong>Heart Rate: ${Math.round(sleepPoint[0])} BPM</strong><br/>
                    <span style="color: #4A90E2;">Sleep Density: ${sleepPoint[1].toFixed(4)}</span><br/>
                    <span style="color: #E74C3C;">Awake Density: ${awakeDensityVal.toFixed(4)}</span><br/>
                    <hr style="margin: 5px 0; border-color: #444;">
                    <span style="color: #4A90E2;">Sleep: ${sleepPercent}% of readings</span><br/>
                    <span style="color: #E74C3C;">Awake: ${awakePercent}% of readings</span>
                `)
                .style("left", (event) => {
                    const tooltip = document.getElementById("tooltip_density");
                    const left = Math.max(10, event.pageX - tooltip.offsetWidth / 2);
                    return `${Math.min(window.innerWidth - tooltip.offsetWidth - 10, left)}px`;
                })
                .style("top", (event) => {
                    const tooltip = document.getElementById("tooltip_density");
                    return `${Math.min(window.innerHeight - tooltip.offsetHeight - 10, event.pageY - 10)}px`;
                });
            })
            .on("mouseout", function() {
                d3.select(this).attr("stroke-width", 3);
                tooltip_density.transition()
                    .duration(300)
                    .style("opacity", 0);
            });
    }
    
    // Add awake density curve (red)
    if (awakeDensity.length > 0) {
        // Add filled area for awake
        g.append("path")
            .datum(awakeDensity)
            .attr("fill", "#E74C3C")
            .attr("fill-opacity", 0.3)
            .attr("d", area);
        
        // Add awake curve line with hover
        g.append("path")
            .datum(awakeDensity)
            .attr("fill", "none")
            .attr("stroke", "#E74C3C")
            .attr("stroke-width", 3)
            .attr("d", line)
            .style("cursor", "crosshair")
            .on("mouseover", function(event, d) {
                d3.select(this).attr("stroke-width", 5);
            })
            .on("mousemove", function(event, d) {
                const [mouseX, mouseY] = d3.pointer(event);
                const hrValue = Math.round(xScale.invert(mouseX));
                
                // Find closest point on awake curve
                const awakePoint = awakeDensity.reduce((prev, curr) => 
                    Math.abs(curr[0] - hrValue) < Math.abs(prev[0] - hrValue) ? curr : prev
                );
                
                // Find corresponding sleep density value
                let sleepDensityVal = 0;
                if (sleepDensity.length > 0) {
                    const sleepPoint = sleepDensity.find(d => Math.round(d[0]) === Math.round(awakePoint[0]));
                    sleepDensityVal = sleepPoint ? sleepPoint[1] : 0;
                }
                
                // Calculate percentages
                const sleepCount = sleepHR.filter(hr => Math.abs(hr - awakePoint[0]) <= 2).length;
                const awakeCount = awakeHR.filter(hr => Math.abs(hr - awakePoint[0]) <= 2).length;
                const sleepPercent = sleepHR.length > 0 ? (sleepCount / sleepHR.length * 100).toFixed(1) : 0;
                const awakePercent = awakeHR.length > 0 ? (awakeCount / awakeHR.length * 100).toFixed(1) : 0;
                
                tooltip_density.transition()
                    .duration(100)
                    .style("opacity", .9);
                
                tooltip_density.html(`
                    <strong>☀️ Awake Curve</strong><br/>
                    <strong>Heart Rate: ${Math.round(awakePoint[0])} BPM</strong><br/>
                    <span style="color: #4A90E2;">Sleep Density: ${sleepDensityVal.toFixed(4)}</span><br/>
                    <span style="color: #E74C3C;">Awake Density: ${awakePoint[1].toFixed(4)}</span><br/>
                    <hr style="margin: 5px 0; border-color: #444;">
                    <span style="color: #4A90E2;">Sleep: ${sleepPercent}% of readings</span><br/>
                    <span style="color: #E74C3C;">Awake: ${awakePercent}% of readings</span>
                `)
                .style("left", (event) => {
                    const tooltip = document.getElementById("tooltip_density");
                    const left = Math.max(10, event.pageX - tooltip.offsetWidth / 2);
                    return `${Math.min(window.innerWidth - tooltip.offsetWidth - 10, left)}px`;
                })
                .style("top", (event) => {
                    const tooltip = document.getElementById("tooltip_density");
                    return `${Math.min(window.innerHeight - tooltip.offsetHeight - 10, event.pageY - 10)}px`;});
            })
            .on("mouseout", function() {
                d3.select(this).attr("stroke-width", 3);
                tooltip_density.transition()
                    .duration(300)
                    .style("opacity", 0);
            });
    }
    
    // Calculate and highlight overlap region
    if (sleepDensity.length > 0 && awakeDensity.length > 0) {
        const overlapData = hrRange.map(hr => {
            const sleepVal = sleepDensity.find(d => d[0] === hr);
            const awakeVal = awakeDensity.find(d => d[0] === hr);
            
            const sleepDens = sleepVal ? sleepVal[1] : 0;
            const awakeDens = awakeVal ? awakeVal[1] : 0;
            
            return [hr, Math.min(sleepDens, awakeDens)];
        }).filter(d => d[1] > 0);
        
        // Add overlap shading
        if (overlapData.length > 0) {
            g.append("path")
                .datum(overlapData)
                .attr("fill", "#9B59B6")
                .attr("fill-opacity", 0.4)
                .attr("d", area);
        }
    }
    
    // Add legend
    const legend = g.append("g")
        .attr("transform", `translate(${width - 150}, 20)`);
    
    // Sleep legend
    legend.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "#4A90E2")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#4A90E2")
        .attr("stroke-width", 2);
    
    legend.append("text")
        .attr("x", 20)
        .attr("y", 12)
        .text("💤 Sleep Heart Rate")
        .style("font-size", "14px");
    
    // Awake legend
    legend.append("rect")
        .attr("y", 25)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "#E74C3C")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#E74C3C")
        .attr("stroke-width", 2);
    
    legend.append("text")
        .attr("x", 20)
        .attr("y", 37)
        .text("☀️ Awake Heart Rate")
        .style("font-size", "14px");
    
    // Overlap legend (if exists)
    if (sleepDensity.length > 0 && awakeDensity.length > 0) {
        legend.append("rect")
            .attr("y", 50)
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", "#9B59B6")
            .attr("fill-opacity", 0.4)
            .attr("stroke", "#9B59B6")
            .attr("stroke-width", 2);
        
        legend.append("text")
            .attr("x", 20)
            .attr("y", 62)
            .text("Overlap")
            .style("font-size", "14px");
    }
    
    // Add summary statistics
    if (sleepHR.length > 0 && awakeHR.length > 0) {
        const sleepMean = d3.mean(sleepHR);
        const awakeMean = d3.mean(awakeHR);
        
        // Add mean lines
        g.append("line")
            .attr("x1", xScale(sleepMean))
            .attr("x2", xScale(sleepMean))
            .attr("y1", 0)
            .attr("y2", height)
            .attr("stroke", "#4A90E2")
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", "5,5")
            .attr("opacity", 0.7);
        
        g.append("line")
            .attr("x1", xScale(awakeMean))
            .attr("x2", xScale(awakeMean))
            .attr("y1", 0)
            .attr("y2", height)
            .attr("stroke", "#E74C3C")
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", "5,5")
            .attr("opacity", 0.7);
        
        // Add mean labels
        g.append("text")
            .attr("x", xScale(sleepMean))
            .attr("y", -5)
            .attr("text-anchor", "middle")
            .style("font-size", "10px")
            .style("fill", "#4A90E2")
            .text(`Sleep: ${sleepMean.toFixed(1)}`);
        
        g.append("text")
            .attr("x", xScale(awakeMean))
            .attr("y", -5)
            .attr("text-anchor", "middle")
            .style("font-size", "10px")
            .style("fill", "#E74C3C")
            .text(`Awake: ${awakeMean.toFixed(1)}`);
    }
}

// Helper functions (same as before)
function parseTime(timeString) {
    const parts = timeString.split(':');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    return hours + minutes/60;
}

function isInSleepPeriod(currentTime, inBedTime, outBedTime) {
    if (inBedTime > outBedTime) {
        return currentTime >= inBedTime || currentTime <= outBedTime;
    } else {
        return currentTime >= inBedTime && currentTime <= outBedTime;
    }
}

// Main function to create the density plot
async function createDualLineGraph() {
    
    try {
        const hrData = await aggregateHeartRateData();
        renderDensityPlot(hrData);
    } catch (error) {
        console.error("Error in createDensityPlot:", error);
    }
}

// Initialize the density plot when the page loads
document.addEventListener('DOMContentLoaded', function() {    
    // Add a small delay to ensure other elements are ready
    setTimeout(() => {
        createDualLineGraph();
    }, 1000);
});

// Load participant data
function loadParticipantData(userNum) {
    // Update active user in navigation
    d3.selectAll(".participant-circle").classed("active", false);
    d3.select(`#user-${userNum}`).classed("active", true);
    
    currentUser = userNum;
    
    Promise.all([
        d3.csv(`data/MergedUserData/merged_user_${userNum}.csv`),
        d3.csv(`data/DataPaper/user_${userNum}/Actigraph.csv`)
    ]).then(([sleepData, hrData]) => {
        renderSleepArc(sleepData[0]);
        renderHeartRateGraph(hrData, sleepData[0]);
        updateSleepMetrics(sleepData[0]);
    }).catch(error => {
        console.error("Error loading data:", error);
    });
}

// Update sleep metrics panel
function updateSleepMetrics(sleepInfo) {
    // Calculate sleep duration in hours and minutes
    let sleepMinutes = parseInt(sleepInfo["Total Sleep Time (TST)"]);
    let hours = Math.floor(sleepMinutes / 60);
    let minutes = sleepMinutes % 60;
    
    // Calculate sleep efficiency percentage
    let efficiency = (sleepMinutes / (sleepMinutes + parseInt(sleepInfo["Wake After Sleep Onset (WASO)"]))) * 100;
    
    // Update metrics display
    document.getElementById("sleepDuration").textContent = `${hours}h ${minutes}m`;
    document.getElementById("sleepEfficiency").textContent = `${Math.round(efficiency)}%`;
    document.getElementById("wasoValue").textContent = `${sleepInfo["Wake After Sleep Onset (WASO)"]} min`;
    document.getElementById("sleepOnset").textContent = sleepInfo["Onset Time"];
}

// Set up the clock dimensions
const width = 450, height = 450, radius = 150;

function setupSleepClock() {
    // Clear any existing SVG
    d3.select("#sleepClockContainer svg").remove();

    const svg = d3.select("#sleepClockContainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
    

    // Add outer circle
    svg.append("circle")
        .attr("class", "clock-outer-ring")
        .attr("r", radius)
        .attr("fill", "none") // ✅ Keep fill transparent if you only want the border
        .attr("stroke", "black") // ✅ Border color
        .attr("stroke-width", 10);

    // Add inner circle
    svg.append("circle")
        .attr("class", "clock-inner-circle")
        .attr("r", radius)
        .style("fill", "#FBE870");


    // Generate hour markers
    const hours = 24;
    const angleStep = 360 / hours;

    for (let i = 0; i < hours; i++) {
        const angle = i * angleStep - 90; // Start from top (12 o'clock)
        const isMainHour = i % 6 === 0; // Main markers at 12, 6, 12, 6
        const tickLength = isMainHour ? 15 : 8;
        
        // Calculate coordinates
        let outerX = Math.cos(angle * Math.PI / 180) * radius;
        let outerY = Math.sin(angle * Math.PI / 180) * radius;
        
        let innerX = Math.cos(angle * Math.PI / 180) * (radius - tickLength);
        let innerY = Math.sin(angle * Math.PI / 180) * (radius - tickLength);
        
        // Add tick mark
        svg.append("line")
            .attr("class", "hour-tick")
            .attr("x1", outerX)
            .attr("y1", outerY)
            .attr("x2", innerX)
            .attr("y2", innerY)
            .attr("stroke-width", isMainHour ? 2 : 1);
        
        // Add hour label for main hours
        if (isMainHour) {
            const labelX = Math.cos(angle * Math.PI / 180) * (radius - 30);
            const labelY = Math.sin(angle * Math.PI / 180) * (radius - 30);
            
            let hour = i / 2;
            if (hour === 0) hour = 12; // Convert 0 to 12
            
            svg.append("text")
                .attr("class", "hour-label")
                .attr("x", labelX)
                .attr("y", labelY)
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "middle")
                .attr("fill", "black")
                .text(hour);
            
            // Add AM/PM label
            const ampmX = Math.cos(angle * Math.PI / 180) * (radius - 45);
            const ampmY = Math.sin(angle * Math.PI / 180) * (radius - 45);
            
            svg.append("text")
                .attr("class", "am-pm-label")
                .attr("x", ampmX)
                .attr("y", ampmY)
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "middle");
        }
    }

    return svg;
}

// Function to Convert 24-hour format to Angles
function timeToRad(timeStr) {
    let [hours, minutes] = timeStr.split(":").map(Number);
    let totalHours = hours + (minutes / 60);
    angle = totalHours * 30;
    return angle * Math.PI / 180;
}

function renderSleepArc(sleepInfo) {
    // Setup or clear sleep clock
    const svg = setupSleepClock();
    
    // Parse times from the data
    const inBedTime = sleepInfo["In Bed Time"];
    const outBedTime = sleepInfo["Out Bed Time"];
    
    // Create arc generator
    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);
    
    // Calculate start and end angles
    const startAngle = timeToRad(inBedTime);
    let endAngle = timeToRad(outBedTime);
    
    // Handle cases where sleep crosses midnight
    if (endAngle < startAngle) {
        endAngle += 4 * Math.PI;
    }
    
    // Draw the sleep arc
    svg.append("path")
        .attr("class", "sleep-arc")
        .attr("d", arc({
            startAngle: startAngle,
            endAngle: endAngle
        }))
        .style("fill", "#2c3e50");
    
    
        
    d3.select("#tooltip_sleep").style("opacity", 0);   

    // Add tooltip interaction
    svg.selectAll(".sleep-arc")
        .on("mouseover", function(event) {
            const tooltip_sleep = d3.select("#tooltip_sleep");
            
            // Format data for tooltip
            const waso = sleepInfo["Wake After Sleep Onset (WASO)"];
            const onset = sleepInfo["Onset Time"];
            const duration = sleepInfo["Total Sleep Time (TST)"];
            const efficiency = Math.round((parseInt(duration) / (parseInt(duration) + parseInt(waso))) * 100);
            
            // Set tooltip content
            tooltip_sleep.html(`
                <div class="tooltip-title">Sleep Details</div>
                <div class="tooltip-metric">
                    <span class="tooltip-label">Sleep Onset:</span>
                    <span class="tooltip-value">${onset}</span>
                </div>
                <div class="tooltip-metric">
                    <span class="tooltip-label">Duration:</span>
                    <span class="tooltip-value">${Math.floor(duration/60)}h ${duration%60}m</span>
                </div>
                <div class="tooltip-metric">
                    <span class="tooltip-label">WASO:</span>
                    <span class="tooltip-value">${waso} min</span>
                </div>
                <div class="tooltip-metric">
                    <span class="tooltip-label">Efficiency:</span>
                    <span class="tooltip-value">${efficiency}%</span>
                </div>
            `);
            // Calculate the midpoint angle for the tooltip
            const midAngle = (startAngle + endAngle) / 2;

// Convert angle to coordinates
            const tooltipX = Math.cos(midAngle) * (radius / 1.5) + width / 2; // Adjust for clock position
            const tooltipY = Math.sin(midAngle) * (radius / 1.5) + height / 2 + 40;

// Position tooltip at the correct spot above the sleep arc
            tooltip_sleep
                .style("left", `${tooltipX}px`) // ✅ Centered above the sleep segment
                .style("top", `${tooltipY}px`)
                .style("opacity", 1);
            
        })
        .on("mouseout", function() {
            d3.select("#tooltip_sleep").style("opacity", 0).style("left", "-9999px");
        });
}

// Heart Rate Time Series Graph with Sleep Annotations and Zoom Brush

function renderHeartRateGraph(hrData, sleepInfo) {
    // Clear previous graph
    d3.select("#hrGraphChart").selectAll("*").remove();
    d3.select("body").selectAll(".hr-tooltip").remove();
    
    // Set dimensions and margins
    const margin = { top: 20, right: 30, bottom: 80, left: 50 }; // Increased bottom margin for brush
    const width = 900 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    const brushHeight = 60; // Height of the brush area
    
    // Create SVG
    const svg = d3.select("#hrGraphChart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom + brushHeight);
    
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Create brush area container
    const brushG = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top + height + 40})`);
    
    // Parse and process data - maintain CSV order, handle day transitions properly
    const processedData = hrData
        .filter(d => d.HR && !isNaN(+d.HR) && +d.HR > 0) // Filter valid HR data
        .map((d, i) => {
            // Create sequential datetime based on CSV row order
            // Handle day transitions properly (day 1 -> day 2 when time goes from 23:59:59 to 00:00:00)
            const baseDate = new Date(2024, 0, 1); // Fixed base date
            
            const [hours, minutes, seconds] = d.time.split(':').map(Number);
            
            // Calculate total seconds from start based on day and time
            const dayNumber = +d.day;
            const secondsInDay = hours * 3600 + minutes * 60 + seconds;
            const totalSeconds = (dayNumber - 1) * 86400 + secondsInDay; // 86400 seconds in a day
            
            const datetime = new Date(baseDate.getTime() + totalSeconds * 1000);
            
            return {
                datetime: datetime,
                hr: +d.HR,
                csvIndex: i, // Keep original CSV index
                day: dayNumber,
                time: d.time,
                totalSeconds: totalSeconds
            };
        }); // DO NOT SORT - keep original CSV order
    
    if (processedData.length === 0) {
        g.append("text")
            .attr("x", width / 2)
            .attr("y", height / 2)
            .attr("text-anchor", "middle")
            .style("font-size", "16px")
            .style("fill", "#666")
            .text("No valid heart rate data available");
        return;
    }
    
    // Parse sleep information from sleepInfo
    const sleepPeriod = parseSleepPeriod(sleepInfo);
    
    // Set up scales - use sequential time based on data order
    const timeRange = processedData[processedData.length - 1].datetime - processedData[0].datetime;
    const fullTimeExtent = [processedData[0].datetime, processedData[processedData.length - 1].datetime];
    
    // Main chart scales (will be updated by brush)
    const xScale = d3.scaleTime()
        .domain(fullTimeExtent)
        .range([0, width]);
    
    const yScale = d3.scaleLinear()
        .domain(d3.extent(processedData, d => d.hr))
        .nice()
        .range([height, 0]);
    
    // Brush/overview scales (always show full data)
    const xScaleBrush = d3.scaleTime()
        .domain(fullTimeExtent)
        .range([0, width]);
    
    const yScaleBrush = d3.scaleLinear()
        .domain(d3.extent(processedData, d => d.hr))
        .nice()
        .range([brushHeight, 0]);
    
    // Create line generators
    const line = d3.line()
        .x(d => xScale(d.datetime))
        .y(d => yScale(d.hr))
        .curve(d3.curveMonotoneX);
    
    const lineBrush = d3.line()
        .x(d => xScaleBrush(d.datetime))
        .y(d => yScaleBrush(d.hr))
        .curve(d3.curveMonotoneX);
    
    // Create brush
    const brush = d3.brushX()
        .extent([[0, 0], [width, brushHeight]])
        .on("brush end", function(event) {
            if (!event.selection) {
                // If no selection, reset to full extent
                xScale.domain(fullTimeExtent);
            } else {
                // Update main chart domain based on brush selection
                const [x0, x1] = event.selection;
                const newDomain = [xScaleBrush.invert(x0), xScaleBrush.invert(x1)];
                xScale.domain(newDomain);
            }
            updateMainChart();
        });
    
    // Add brush to brush area
    const brushSelection = brushG.append("g")
        .attr("class", "brush")
        .call(brush);
    
    // Style the brush
    brushSelection.selectAll(".overlay")
        .style("cursor", "crosshair");
    
    brushSelection.selectAll(".selection")
        .style("fill", "#ff4757")
        .style("fill-opacity", 0.2)
        .style("stroke", "#ff4757")
        .style("stroke-width", 1);
    
    // Add reset zoom button
    const resetButton = svg.append("g")
        .attr("transform", `translate(${width + margin.left - 80}, ${margin.top + 10})`)
        .style("cursor", "pointer")
        .on("click", function() {
            brushSelection.call(brush.move, null); // Clear brush selection
            xScale.domain(fullTimeExtent);
            updateMainChart();
        });
    
    resetButton.append("rect")
        .attr("width", 70)
        .attr("height", 25)
        .attr("rx", 3)
        .attr("fill", "#f8f9fa")
        .attr("stroke", "#dee2e6")
        .attr("stroke-width", 1);
    
    resetButton.append("text")
        .attr("x", 35)
        .attr("y", 16)
        .attr("text-anchor", "middle")
        .style("font-size", "11px")
        .style("font-weight", "bold")
        .style("fill", "#495057")
        .text("Reset Zoom");
    
    // Add sleep period annotation BEFORE other elements (so it appears in background)
    let sleepAnnotation;
    if (sleepPeriod) {
        sleepAnnotation = addSleepAnnotation(g, sleepPeriod, xScale, yScale, height, processedData);
    }
    
    // Add axes
    const xAxis = g.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`);
    
    const yAxis = g.append("g")
        .attr("class", "y-axis");
    
    // Add axis labels
    g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "white")
        .style("font-weight", "bold")
        .text("Heart Rate (BPM)");
    
    g.append("text")
        .attr("transform", `translate(${width / 2}, ${height + 35})`)
        .style("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "white")
        .style("font-weight", "bold")
        .text("Time");
    
    // Add grid lines
    const xGrid = g.append("g")
        .attr("class", "x-grid")
        .attr("transform", `translate(0,${height})`);
    
    const yGrid = g.append("g")
        .attr("class", "y-grid");
    
    // Create gradient for the line
    const gradient = svg.append("defs")
        .append("linearGradient")
        .attr("id", "hr-gradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0).attr("y1", yScale(d3.max(processedData, d => d.hr)))
        .attr("x2", 0).attr("y2", yScale(d3.min(processedData, d => d.hr)));
    
    gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#ff4757")
        .attr("stop-opacity", 1);
    
    gradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "#ffa502")
        .attr("stop-opacity", 1);
    
    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#2ed573")
        .attr("stop-opacity", 1);
    
    // Add area under the curve
    const area = d3.area()
        .x(d => xScale(d.datetime))
        .y0(height)
        .y1(d => yScale(d.hr))
        .curve(d3.curveMonotoneX);
    
    const areaPath = g.append("path")
        .datum(processedData)
        .attr("class", "hr-area")
        .style("fill", "url(#hr-gradient)")
        .style("opacity", 0.2);
    
    // Add the main line path
    const path = g.append("path")
        .datum(processedData)
        .attr("class", "hr-line")
        .style("fill", "none")
        .style("stroke", "url(#hr-gradient)")
        .style("stroke-width", 2);
    
    // Add brush overview chart
    brushG.append("path")
        .datum(processedData)
        .attr("class", "brush-line")
        .attr("d", lineBrush)
        .style("fill", "none")
        .style("stroke", "#ff4757")
        .style("stroke-width", 1)
        .style("opacity", 0.7);
    
    // Add brush area
    const brushArea = d3.area()
        .x(d => xScaleBrush(d.datetime))
        .y0(brushHeight)
        .y1(d => yScaleBrush(d.hr))
        .curve(d3.curveMonotoneX);
    
    brushG.append("path")
        .datum(processedData)
        .attr("class", "brush-area")
        .attr("d", brushArea)
        .style("fill", "#ff4757")
        .style("opacity", 0.1);
    
    // Add brush axis
    brushG.append("g")
        .attr("class", "brush-axis")
        .attr("transform", `translate(0,${brushHeight})`)
        .call(d3.axisBottom(xScaleBrush)
            .tickFormat(d3.timeFormat("%H:%M"))
            .ticks(6));
    
    // Create tooltip
    const tooltip_hr = d3.select("body")
        .append("div")
        .attr("class", "hr-graph-tooltip-unique-12345")
        .attr("id", "hr-graph-tooltip-unique")
        .style("position", "absolute")
        .style("background", "rgba(0, 0, 0, 0.9)")
        .style("color", "white")
        .style("padding", "12px")
        .style("border-radius", "6px")
        .style("font-size", "13px")
        .style("font-family", "Arial, sans-serif")
        .style("pointer-events", "none")
        .style("opacity", "0")
        .style("z-index", "999999")
        .style("display", "block")
        .style("box-shadow", "0 4px 12px rgba(0,0,0,0.3)")
        .style("border", "1px solid rgba(255,255,255,0.2)")
        .style("max-width", "200px")
        .style("white-space", "nowrap");
    
    // Add invisible overlay for hover detection
    const overlay = g.append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "none")
        .style("pointer-events", "all")
        .style("cursor", "crosshair");
    
    // Mouse event handlers
    overlay
        .on("mousemove", function(event) {
            const [mouseX, mouseY] = d3.pointer(event, this);
            const timeAtMouse = xScale.invert(mouseX);
            
            // Find closest data point within current zoom domain
            const currentDomain = xScale.domain();
            const visibleData = processedData.filter(d => 
                d.datetime >= currentDomain[0] && d.datetime <= currentDomain[1]);
            
            if (visibleData.length === 0) return;
            
            let closestPoint = visibleData[0];
            let minDiff = Math.abs(timeAtMouse - visibleData[0].datetime);
            
            for (let point of visibleData) {
                const diff = Math.abs(timeAtMouse - point.datetime);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestPoint = point;
                }
            }
            
            // Show tooltip
            tooltip_hr
                .style("left", (event.pageX + 15) + "px")
                .style("top", (event.pageY - 15) + "px")
                .style("opacity", "1")
                .html(`
                    <div><strong>Day:</strong> ${closestPoint.day}</div>
                    <div><strong>Time:</strong> ${closestPoint.time}</div>
                    <div><strong>Heart Rate:</strong> ${closestPoint.hr} BPM</div>
                `);
            
            // Highlight point
            g.selectAll(".hover-dot").remove();
            g.append("circle")
                .attr("class", "hover-dot")
                .attr("cx", xScale(closestPoint.datetime))
                .attr("cy", yScale(closestPoint.hr))
                .attr("r", 4)
                .attr("fill", "#e74c3c")
                .attr("stroke", "white")
                .attr("stroke-width", 2)
                .style("pointer-events", "none");
        })
        .on("mouseleave", function() {
            tooltip_hr.style("opacity", "0");
            g.selectAll(".hover-dot").remove();
        });
    
    // Function to update main chart based on zoom level
    function updateMainChart() {
        // Get current domain
        const currentDomain = xScale.domain();
        const timeRange = currentDomain[1] - currentDomain[0];
        const totalHours = timeRange / (1000 * 60 * 60);
        
        // Update tick interval based on zoom level
        let tickInterval;
        if (totalHours <= 2) {
            tickInterval = d3.timeMinute.every(15);
        } else if (totalHours <= 6) {
            tickInterval = d3.timeHour.every(1);
        } else if (totalHours <= 24) {
            tickInterval = d3.timeHour.every(2);
        } else {
            tickInterval = d3.timeHour.every(4);
        }
        
        // Update axes
        xAxis.transition().duration(300)
            .call(d3.axisBottom(xScale)
                .tickFormat(d => {
                    // Find the closest data point to determine which day we're in
                    let closestPoint = processedData[0];
                    let minDiff = Math.abs(d - processedData[0].datetime);
                    
                    for (let point of processedData) {
                        const diff = Math.abs(d - point.datetime);
                        if (diff < minDiff) {
                            minDiff = diff;
                            closestPoint = point;
                        }
                    }
                    
                    // Show day + time for multi-day data or when we cross days
                    if (totalHours > 20 || closestPoint.day > 1) {
                        return `D${closestPoint.day} ${d3.timeFormat("%H:%M")(d)}`;
                    }
                    return d3.timeFormat("%H:%M")(d);
                })
                .ticks(tickInterval));
        
        // Update grid
        xGrid.transition().duration(300)
            .call(d3.axisBottom(xScale)
                .tickSize(-height)
                .tickFormat("")
                .ticks(tickInterval))
            .style("stroke-dasharray", "3,3")
            .style("opacity", 0.3);
        
        yGrid.transition().duration(300)
            .call(d3.axisLeft(yScale)
                .tickSize(-width)
                .tickFormat(""))
            .style("stroke-dasharray", "3,3")
            .style("opacity", 0.3);
        
        // Update main line and area
        path.transition().duration(300)
            .attr("d", line);
        
        areaPath.transition().duration(300)
            .attr("d", area);
        
        // Update sleep annotation if it exists
        if (sleepAnnotation && sleepPeriod) {
            updateSleepAnnotation(sleepAnnotation, sleepPeriod, xScale, yScale, height);
        }
    }
    
    // Initial render
    updateMainChart();
    
    // Add enhanced summary statistics including sleep period stats
    const allStats = calculateStats(processedData, sleepPeriod);
    updateStatsHTML(allStats);
}

// Helper function to update sleep annotation
function updateSleepAnnotation(sleepAnnotation, sleepPeriod, xScale, yScale, height) {
    const sleepStart = xScale(sleepPeriod.start);
    const sleepEnd = xScale(sleepPeriod.end);
    const sleepWidth = sleepEnd - sleepStart;
    
    // Only show annotation if sleep period is visible in current zoom
    const currentDomain = xScale.domain();
    const isVisible = sleepPeriod.end >= currentDomain[0] && sleepPeriod.start <= currentDomain[1];
    
    if (isVisible && sleepWidth > 5) { // Only show if width is reasonable
        sleepAnnotation.select("rect")
            .attr("x", Math.max(0, sleepStart))
            .attr("width", Math.min(sleepWidth, xScale.range()[1] - Math.max(0, sleepStart)));
        
        sleepAnnotation.select("text")
            .attr("x", Math.max(20, sleepStart) + Math.min(sleepWidth, xScale.range()[1] - Math.max(0, sleepStart)) / 2)
            .style("display", sleepWidth > 50 ? "block" : "none"); // Hide text if too narrow
        
        sleepAnnotation.style("display", "block");
    } else {
        sleepAnnotation.style("display", "none");
    }
}

// Parse sleep period from sleepInfo - FIXED VERSION
function parseSleepPeriod(sleepInfo) {
    if (!sleepInfo) return null;
    
    try {
        const baseDate = new Date(2024, 0, 1);
        
        // Parse onset time (sleep start)
        const onsetDay = +sleepInfo["Onset Date"];
        const onsetTime = sleepInfo["Onset Time"];
        const [onsetHours, onsetMinutes] = onsetTime.split(':').map(Number);
        
        // Parse out bed time (sleep end)
        const outBedDay = +sleepInfo["Out Bed Date"];
        const outBedTime = sleepInfo["Out Bed Time"];
        const [outBedHours, outBedMinutes] = outBedTime.split(':').map(Number);
        
        // Calculate datetime objects - FIXED to handle day transitions properly
        const onsetSeconds = (onsetDay - 1) * 86400 + onsetHours * 3600 + onsetMinutes * 60;
        const outBedSeconds = (outBedDay - 1) * 86400 + outBedHours * 3600 + outBedMinutes * 60;
        
        const sleepStart = new Date(baseDate.getTime() + onsetSeconds * 1000);
        const sleepEnd = new Date(baseDate.getTime() + outBedSeconds * 1000);
        
        // VALIDATION: Ensure sleep end is after sleep start
        if (sleepEnd <= sleepStart) {
            console.error("Sleep end time is before or equal to start time:", {
                start: sleepStart,
                end: sleepEnd,
                onsetDay: onsetDay,
                outBedDay: outBedDay,
                onsetTime: onsetTime,
                outBedTime: outBedTime
            });
            return null;
        }
        
        return {
            start: sleepStart,
            end: sleepEnd,
            totalSleepTime: +sleepInfo["Total Sleep Time (TST)"], // in minutes
            efficiency: +sleepInfo.Efficiency,
            onsetTime: onsetTime,
            outBedTime: outBedTime,
            onsetDay: onsetDay,
            outBedDay: outBedDay
        };
    } catch (error) {
        console.error("Error parsing sleep period:", error);
        return null;
    }
}

// Helper function to add sleep annotation (you'll need to implement this based on your existing code)
function addSleepAnnotation(g, sleepPeriod, xScale, yScale, height, processedData) {
    const sleepGroup = g.append("g")
        .attr("class", "sleep-annotation");
    
    const sleepStart = xScale(sleepPeriod.start);
    const sleepEnd = xScale(sleepPeriod.end);
    const sleepWidth = sleepEnd - sleepStart;
    
    // Add sleep period rectangle
    sleepGroup.append("rect")
        .attr("x", sleepStart)
        .attr("y", 0)
        .attr("width", sleepWidth)
        .attr("height", height)
        .attr("fill", "#3498db")
        .attr("opacity", 0.1)
        .attr("stroke", "#3498db")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "3,3");
    
    // Add sleep label
    sleepGroup.append("text")
        .attr("x", sleepStart + sleepWidth / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("fill", "#3498db")
        .text("Sleep Period");
    
    return sleepGroup;
}

// Calculate comprehensive statistics
function calculateStats(processedData, sleepPeriod) {
    // Overall stats
    const avgHR = d3.mean(processedData, d => d.hr);
    const maxHR = d3.max(processedData, d => d.hr);
    const minHR = d3.min(processedData, d => d.hr);
    const duration = processedData[processedData.length - 1].datetime - processedData[0].datetime;
    
    let sleepStats = null;
    
    // Sleep period stats - calculate even if sleep extends beyond available data
    if (sleepPeriod) {
        // Get data range
        const dataStart = processedData[0].datetime;
        const dataEnd = processedData[processedData.length - 1].datetime;
        
        // VALIDATION: Check if sleep period makes sense
        if (sleepPeriod.end <= sleepPeriod.start) {
            console.error("Invalid sleep period: end time is before start time");
            return {
                overall: {
                    avgHR: avgHR,
                    maxHR: maxHR,
                    minHR: minHR,
                    duration: duration
                },
                sleep: null
            };
        }
        
        // Determine effective sleep period within available data
        const effectiveSleepStart = new Date(Math.max(sleepPeriod.start.getTime(), dataStart.getTime()));
        const effectiveSleepEnd = new Date(Math.min(sleepPeriod.end.getTime(), dataEnd.getTime()));
        
        // Only calculate stats if there's overlap between sleep period and available data
        if (effectiveSleepStart < effectiveSleepEnd) {
            const sleepData = processedData.filter(d => 
                d.datetime >= effectiveSleepStart && d.datetime <= effectiveSleepEnd
            );
            
            if (sleepData.length > 0) {
                sleepStats = {
                    avgHR: d3.mean(sleepData, d => d.hr),
                    maxHR: d3.max(sleepData, d => d.hr),
                    minHR: d3.min(sleepData, d => d.hr),
                    totalSleepTime: sleepPeriod.totalSleepTime,
                    efficiency: sleepPeriod.efficiency,
                    dataPoints: sleepData.length,
                    effectiveStart: effectiveSleepStart,
                    effectiveEnd: effectiveSleepEnd,
                    sleepExtendsBeforeData: sleepPeriod.start < dataStart,
                    sleepExtendsBeyondData: sleepPeriod.end > dataEnd
                };
            }
        } else {
            console.warn("No overlap between sleep period and available data");
        }
    }
    
    return {
        overall: {
            avgHR: avgHR,
            maxHR: maxHR,
            minHR: minHR,
            duration: duration
        },
        sleep: sleepStats
    };
}

// Update HTML stats panels
function updateStatsHTML(stats) {
    // Update overall stats
    const overallContent = document.getElementById('overallStatsContent');
    if (overallContent) {
        const overallHTML = `
            <div class="stat-item">
                <span class="stat-label">Average HR:</span>
                <span class="stat-value">${stats.overall.avgHR.toFixed(1)} BPM</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Maximum HR:</span>
                <span class="stat-value">${stats.overall.maxHR} BPM</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Minimum HR:</span>
                <span class="stat-value">${stats.overall.minHR} BPM</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Duration:</span>
                <span class="stat-value">${Math.round(stats.overall.duration / (1000 * 60 * 60))}h ${Math.round((stats.overall.duration % (1000 * 60 * 60)) / (1000 * 60))}m</span>
            </div>
        `;
        overallContent.innerHTML = overallHTML;
    }
    
    // Update sleep stats
    const sleepContent = document.getElementById('sleepStatsContent');
    const sleepPanel = document.getElementById('sleepStats');
    
    if (sleepContent && sleepPanel) {
        if (stats.sleep) {
            sleepPanel.style.display = 'block';
            
            // Add note about data coverage if sleep extends beyond available data
            let coverageNote = '';
            if (stats.sleep.sleepExtendsBeyondData || stats.sleep.sleepExtendsBeforeData) {
                coverageNote = `
                    <div class="stat-item" style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee;">
                        <span class="stat-label" style="font-size: 10px; color: #888;">
                            ${stats.sleep.sleepExtendsBeyondData ? 'Sleep extends beyond available data' : ''}
                            ${stats.sleep.sleepExtendsBeforeData ? 'Sleep starts before available data' : ''}
                        </span>
                    </div>
                `;
            }
            
            const sleepHTML = `
                <div class="stat-item">
                    <span class="stat-label">Average HR:</span>
                    <span class="stat-value sleep-stat-value">${stats.sleep.avgHR.toFixed(1)} BPM</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Maximum HR:</span>
                    <span class="stat-value sleep-stat-value">${stats.sleep.maxHR} BPM</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Minimum HR:</span>
                    <span class="stat-value sleep-stat-value">${stats.sleep.minHR} BPM</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Total Sleep Time:</span>
                    <span class="stat-value sleep-stat-value">${stats.sleep.totalSleepTime} min</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Sleep Efficiency:</span>
                    <span class="stat-value sleep-stat-value">${stats.sleep.efficiency.toFixed(1)}%</span>
                </div>
                ${coverageNote}
            `;
            sleepContent.innerHTML = sleepHTML;
        } else {
            sleepPanel.style.display = 'none';
        }
    }
}

// Create Participant Selection Navigation
function createParticipantNav() {
    const nav = d3.select("#participantNav");
    
    for (let i = 1; i <= 21; i++) {
        nav.append("div")
            .attr("class", "participant-circle")
            .attr("id", `user-${i}`)
            .classed("active", i === 1) // Set first user as active
            .text(i)
            .on("click", () => loadParticipantData(i));
    }
}

// Initialize app
createParticipantNav();
loadParticipantData(1);

// ============= DASHBOARD FUNCTIONALITY =============

let sleepData = [];
let filteredData = [];
let activityData = [];

// Load both CSV files
Promise.all([
    d3.csv("data/all_users.csv"),
    d3.csv("data/activity_summary.csv")
]).then(([sleepCsv, activityCsv]) => {
    // Process sleep data
    sleepData = sleepCsv.map(d => ({
        id: d.participant,
        age: +d.Age,
        stress: +d.Daily_stress,
        sleepDuration: +d["Total Sleep Time (TST)"] / 60,
        efficiency: +d.Efficiency,
        waso: +d["Wake After Sleep Onset (WASO)"],
        latency: +d.Latency,
        awakenings: +d["Number of Awakenings"],
        activityLevel: +d.activityMinutes || 0
    }));
    
    // Process activity data
    activityData = activityCsv.map(d => ({
        id: d.user_id,
        screenSmall: +d.screen_small_minutes,
        screenLarge: +d.screen_large_minutes,
        movementLight: +d.movement_light_minutes,
        movementMedium: +d.movement_medium_minutes,
        movementHeavy: +d.movement_heavy_minutes,
        caffeineEvents: +d.caffeine_events,
        alcoholEvents: +d.alcohol_events
    }));
    
    // Merge the datasets
    sleepData = sleepData.map(sleep => {
        const activity = activityData.find(act => act.id === sleep.id);
        return { ...sleep, ...activity };
    }).filter(d => d.caffeineEvents !== undefined); // Only keep records with activity data
    
    filteredData = [...sleepData];
    initCharts();
});

// Chart dimensions
const margin = {top: 20, right: 30, bottom: 40, left: 50};
const chartWidth = 400 - margin.left - margin.right;
const chartHeight = 300 - margin.top - margin.bottom;

// Color scales
const stressColorScale = d3.scaleSequential(d3.interpolateReds).domain([1, 50]);
const ageColorScale = d3.scaleSequential(d3.interpolateBlues).domain([20, 80]);

// Tooltip
const tooltip = d3.select("#tooltip");

function initCharts() {
    createEfficiencyChart();
    createWASOChart();
    createLatencyChart();
    createAwakeningsChart();
    createCaffeineChart();
    createMovementChart();
    createScreenChart();
    updateMetrics();
}

function createEfficiencyChart() {
    const svg = d3.select("#efficiency-chart");
    svg.selectAll("*").remove();
    
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    const xScale = d3.scaleLinear()
        .domain([4, 12])
        .range([0, chartWidth]);
    
    const yScale = d3.scaleLinear()
        .domain([50, 100])
        .range([chartHeight, 0]);
    
    // Axes
    g.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale));
    
    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale));
    
    // Axis labels
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", `translate(${chartWidth/2}, ${chartHeight + 35})`)
        .style("text-anchor", "middle")
        .text("Sleep Duration (hours)");
    
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (chartHeight / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Sleep Efficiency (%)");
    
    updateEfficiencyChart(g, xScale, yScale);
}

function updateEfficiencyChart(g, xScale, yScale) {
    const dots = g.selectAll(".dot")
        .data(filteredData, d => d.id);
    
    dots.enter()
        .append("circle")
        .attr("class", "dot")
        .attr("r", 4)
        .merge(dots)
        .transition()
        .duration(300)
        .attr("cx", d => xScale(d.sleepDuration))
        .attr("cy", d => yScale(d.efficiency))
        .attr("fill", d => stressColorScale(d.stress));
    
    dots.exit().remove();
    
    g.selectAll(".dot")
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 1)
                .html(`Stress: ${Math.round(d.stress)}<br/>Avg WASO: ${d.avgWASO.toFixed(1)} min<br/>Count: ${d.count}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("opacity", 0);
        });
}

function createLatencyChart() {
    const svg = d3.select("#latency-chart");
    svg.selectAll("*").remove();
    
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    const bins = d3.histogram()
        .value(d => d.latency)
        .domain([0, 30])
        .thresholds(15)(filteredData);
    
    const xScale = d3.scaleLinear()
        .domain([0, 30])
        .range([0, chartWidth]);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length)])
        .range([chartHeight, 0]);
    
    // Axes
    g.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale));
    
    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale));
    
    // Axis labels
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", `translate(${chartWidth/2}, ${chartHeight + 35})`)
        .style("text-anchor", "middle")
        .text("Sleep Latency (min)");
    
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (chartHeight / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Frequency");
    
    // Bars
    g.selectAll(".bar")
        .data(bins)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.x0))
        .attr("width", d => xScale(d.x1) - xScale(d.x0) - 1)
        .attr("y", d => yScale(d.length))
        .attr("height", d => chartHeight - yScale(d.length))
        .attr("fill", "#4ecdc4");
}

function createAwakeningsChart() {
    const svg = d3.select("#awakenings-chart");
    svg.selectAll("*").remove();
    
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    const xScale = d3.scaleLinear()
        .domain([20, 80])
        .range([0, chartWidth]);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d.awakenings) + 1])
        .range([chartHeight, 0]);
    
    // Axes
    g.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale));
    
    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale));
    
    // Axis labels
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", `translate(${chartWidth/2}, ${chartHeight + 35})`)
        .style("text-anchor", "middle")
        .text("Age");
    
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (chartHeight / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Number of Awakenings");
    
    // Dots
    g.selectAll(".dot")
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.age))
        .attr("cy", d => yScale(d.awakenings))
        .attr("r", 3)
        .attr("fill", d => ageColorScale(d.age))
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 1)
                .html(`Age: ${d.age}<br/>Awakenings: ${d.awakenings}<br/>Sleep Duration: ${d.sleepDuration}h`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("opacity", 0);
        });
}

function createCaffeineChart() {
    const svg = d3.select("#caffeine-chart");
    svg.selectAll("*").remove();
    
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d.caffeineEvents) || 10])
        .range([0, chartWidth]);
    
    const yScale = d3.scaleLinear()
        .domain([d3.min(filteredData, d => d.efficiency) - 5, d3.max(filteredData, d => d.efficiency) + 5])
        .range([chartHeight, 0]);
    
    // Axes
    g.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale));
    
    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale));
    
    // Axis labels
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", `translate(${chartWidth/2}, ${chartHeight + 35})`)
        .style("text-anchor", "middle")
        .text("Caffeine Events per Day");
    
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (chartHeight / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Sleep Efficiency (%)");
    
    // Dots
    g.selectAll(".dot")
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.caffeineEvents))
        .attr("cy", d => yScale(d.efficiency))
        .attr("r", 4)
        .attr("fill", "#e74c3c")
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 1)
                .html(`Caffeine: ${d.caffeineEvents} events<br/>Efficiency: ${d.efficiency}%<br/>ID: ${d.id}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("opacity", 0);
        });
}

function createMovementChart() {
    const svg = d3.select("#movement-chart");
    svg.selectAll("*").remove();
    
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    const movementType = d3.select("#movement-select").property("value");
    const movementKey = `movement${movementType.charAt(0).toUpperCase() + movementType.slice(1)}`;
    
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d[movementKey]) || 200])
        .range([0, chartWidth]);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d.latency) + 5])
        .range([chartHeight, 0]);
    
    // Axes
    g.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale));
    
    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale));
    
    // Axis labels
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", `translate(${chartWidth/2}, ${chartHeight + 35})`)
        .style("text-anchor", "middle")
        .text(`${movementType.charAt(0).toUpperCase() + movementType.slice(1)} Movement (min)`);
    
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (chartHeight / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Sleep Latency (min)");
    
    // Dots
    g.selectAll(".dot")
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d[movementKey]))
        .attr("cy", d => yScale(d.latency))
        .attr("r", 4)
        .attr("fill", "#3498db")
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 1)
                .html(`${movementType} Movement: ${d[movementKey]} min<br/>Latency: ${d.latency} min<br/>ID: ${d.id}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("opacity", 0);
        });
}

function createScreenChart() {
    const svg = d3.select("#screen-chart");
    svg.selectAll("*").remove();
    
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    const screenType = d3.select("#screen-select").property("value");
    const screenKey = `screen${screenType.charAt(0).toUpperCase() + screenType.slice(1)}`;
    
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d[screenKey]) || 200])
        .range([0, chartWidth]);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d.waso) + 10])
        .range([chartHeight, 0]);
    
    // Axes
    g.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale));
    
    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale));
    
    // Axis labels
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", `translate(${chartWidth/2}, ${chartHeight + 35})`)
        .style("text-anchor", "middle")
        .text(`${screenType.charAt(0).toUpperCase() + screenType.slice(1)} Screen Time (min)`);
    
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (chartHeight / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("WASO (min)");
    
    // Dots
    g.selectAll(".dot")
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d[screenKey]))
        .attr("cy", d => yScale(d.waso))
        .attr("r", 4)
        .attr("fill", "#9b59b6")
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 1)
                .html(`${screenType} Screen: ${d[screenKey]} min<br/>WASO: ${d.waso} min<br/>ID: ${d.id}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("opacity", 0);
        });
}

function updateMetrics() {
    // If you want to show summary metrics, you can target an element and insert HTML like this:
    const metricsDiv = document.getElementById("metrics-summary");
    if (!metricsDiv) return;

    const avgDuration = d3.mean(filteredData, d => d.sleepDuration);
    const avgEfficiency = d3.mean(filteredData, d => d.efficiency);
    const avgStress = d3.mean(filteredData, d => d.stress);
    const avgAge = d3.mean(filteredData, d => d.age);

    metricsDiv.innerHTML = `
        <div><strong>Avg Duration:</strong> ${avgDuration.toFixed(1)} h</div>
        <div><strong>Avg Efficiency:</strong> ${avgEfficiency.toFixed(1)}%</div>
        <div><strong>Avg Stress:</strong> ${avgStress.toFixed(1)}</div>
        <div><strong>Avg Age:</strong> ${avgAge.toFixed(1)}</div>
    `;
}
function createWASOChart() {
    const svg = d3.select("#waso-chart");
    svg.selectAll("*").remove();

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Group data by stress ranges
    const stressBins = d3.range(0, 51, 5);
    const binData = stressBins.map(bin => {
        const inBin = filteredData.filter(d => d.stress >= bin && d.stress < bin + 5);
        return {
            stress: bin + 2.5,
            avgWASO: d3.mean(inBin, d => d.waso) || 0,
            count: inBin.length
        };
    }).filter(d => d.count > 0);

    const xScale = d3.scaleBand()
        .domain(binData.map(d => d.stress))
        .range([0, chartWidth])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(binData, d => d.avgWASO) || 50])
        .range([chartHeight, 0]);

    // Axes
    g.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale).tickFormat(d => Math.round(d)));

    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale));

    // Axis labels
    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", `translate(${chartWidth/2}, ${chartHeight + 35})`)
        .style("text-anchor", "middle")
        .text("Stress Level");

    g.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (chartHeight / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Average WASO (min)");

    // Bars
    g.selectAll(".bar")
        .data(binData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.stress))
        .attr("width", xScale.bandwidth())
        .attr("y", d => yScale(d.avgWASO))
        .attr("height", d => chartHeight - yScale(d.avgWASO))
        .attr("fill", "#ff6b6b")
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 1)
                .html(`
                    <strong>Stress Level:</strong> ${Math.round(d.stress)}<br/>
                    <strong>Avg WASO:</strong> ${d.avgWASO.toFixed(1)} min<br/>
                    <strong>Participants:</strong> ${d.count}
                `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("opacity", 0);
        });
}  
